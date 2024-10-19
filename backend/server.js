// backend/server.js
const express = require("express");
const path = require("path");
const app = express();
const pool = require("../backend/db");

app.use(express.json());

// Configuración para servir los archivos estáticos de React (en producción)
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// Definir un endpoint de ejemplo de API
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hola mundo" });
});

// Endpoint para autenticación de usuarios
app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Consulta para verificar si el usuario existe y la contraseña coincide
    const result = await pool.query(
      "SELECT * FROM public.usuarios WHERE correo_electronico = $1 AND contrasena = $2",
      [email, password]
    );

    if (result.rows.length > 0) {
      // El usuario existe y la contraseña coincide
      const user = result.rows[0]; // Obtener la información del usuario
      res.status(200).json({
        message: "Autenticación exitosa",
        user: {
          name: user.nombre + " " + user.apellido,
          username: user.nombre_usuario, // Asegúrate de que el campo coincida con el de tu tabla
          email: user.correo_electronico,
          userType: user.rol, // Otro campo que quieras devolver
        },
      });
    } else {
      // Usuario no encontrado o contraseña incorrecta
      res.status(401).json({ error: "Credenciales incorrectas" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error en el servidor" });
  }
});

// Endpoints para obtener datos de la base de datos
const endpoints = [
  { path: "/api/data/usuarios", table: "public.usuarios" },
  { path: "/api/data/prueba", table: "public.casos_prueba" },
  { path: "/api/data/uso", table: "public.casos_uso" },
  { path: "/api/data/defectos", table: "public.defectos" },
];

endpoints.forEach((endpoint) => {
  app.get(endpoint.path, async (req, res, next) => {
    try {
      const result = await pool.query(`SELECT * FROM ${endpoint.table}`);
      res.json(result.rows);
    } catch (err) {
      next(err); // Pasar el error al middleware de manejo de errores
    }
  });
});

app.get("/api/data/proyectos", async (req, res) => {
  try {
    const result = await pool.query(`
     SELECT 
        p.id, 
        p.nombre, 
        p.descripcion, 
        p.fecha_inicio, 
        p.fecha_fin, 
        p.estado, 
        CONCAT(u.nombre, ' ', u.apellido)  AS creado_por 
      FROM 
        public.proyectos p
      JOIN 
        public.usuarios u 
      ON 
        p.creado_por = u.id
    `);

    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Error en el servidor");
  }
});

// Endpoint para contar el número de filas en la tabla "proyectos"
app.get("/api/data/proyectos/count", async (req, res) => {
  try {
    const result = await pool.query("SELECT COUNT(*) FROM public.proyectos");
    const count = result.rows[0].count; // Obtener el conteo del resultado

    res.status(200).json({ total: parseInt(count, 10) }); // Convertir el conteo a número y devolverlo en JSON
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error en el servidor" });
  }
});

// Middleware para manejar rutas no encontradas (404)
app.use((req, res, next) => {
  res.status(404).json({
    error: "Ruta no encontrada",
  });
});

// Middleware de manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack); // Imprimir el error para depuración
  res.status(500).json({
    error: "Ocurrió un error en el servidor",
  });
});

// Servir el frontend en todas las rutas no-API
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
