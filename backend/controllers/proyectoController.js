const pool = require("../config/db");

const obtenerProyectos = async (req, res, next) => {
  try {
    const result = await pool.query(`
      SELECT 
        p.id, 
        p.nombre as proyecto_nombre, 
        p.descripcion as proyecto_descripcion, 
        p.fecha_inicio, 
        p.fecha_fin, 
        p.estado, 
        CONCAT(u.nombre, ' ', u.apellido) AS creado_por 
      FROM 
        public.proyectos p
      JOIN 
        public.usuarios u 
      ON 
        p.creado_por = u.id
    `);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
};

const updateProyecto = async (req, res, next) => {
  const {
    id,
    proyecto_nombre,
    proyecto_descripcion,
    fecha_inicio,
    fecha_fin,
    estado,
    creado_por,
  } = req.body;
  const query = `
    UPDATE public.proyectos
    SET 
      nombre = $1,
      descripcion = $2,
      fecha_inicio = $3,
      fecha_fin = $4,
      estado = $5,
      creado_por = $6
    WHERE 
      id = $7;
  `;

  const values = [
    proyecto_nombre,
    proyecto_descripcion,
    fecha_inicio,
    fecha_fin,
    estado,
    creado_por,
    id,
  ];

  try {
    const result = await pool.query(query, values);
    console.log("Proyecto actualizado con éxito", result);
  } catch (error) {
    console.error("Error actualizando el proyecto:", error);
  }
};

const contarProyectos = async (req, res, next) => {
  try {
    const result = await pool.query("SELECT COUNT(*) FROM public.proyectos");
    const count = result.rows[0].count;
    res.status(200).json({ total: parseInt(count, 10) });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  obtenerProyectos,
  contarProyectos,
  updateProyecto,
};
