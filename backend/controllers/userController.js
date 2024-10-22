const pool = require("../config/db");

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const query = `
    SELECT id, 
    nombre as name, 
    apellido as lastname,
    correo_electronico as email,
    rol as type
    FROM public.usuarios
     WHERE correo_electronico = $1 AND contrasena = $2
    `;
    const result = await pool.query(query, [email, password]);

    if (result.rows.length > 0) {
      const user = result.rows[0];
      res.status(200).json({
        user,
      });
    } else {
      res.status(401).json({ error: "Credenciales incorrectas" });
    }
  } catch (err) {
    next(err);
  }
};

const contarUsuarios = async (req, res, next) => {
  try {
    const result = await pool.query("SELECT COUNT(*) FROM public.usuarios");
    const count = result.rows[0].count;
    res.status(200).json({ total: parseInt(count, 10) });
  } catch (error) {
    next(err);
  }
};

const getAllUsuarios = async (req, res, next) => {
  try {
    const result = await pool.query(
      "SELECT id, nombre as name, apellido as lastname FROM public.usuarios"
    );
    res.status(200).json(result.rows);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  loginUser,
  contarUsuarios,
  getAllUsuarios,
};
