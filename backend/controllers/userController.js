const pool = require("../config/db");

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query(
      "SELECT * FROM public.usuarios WHERE correo_electronico = $1 AND contrasena = $2",
      [email, password]
    );

    if (result.rows.length > 0) {
      const user = result.rows[0];
      res.status(200).json({
        message: "Autenticación exitosa",
        user: {
          name: user.nombre + " " + user.apellido,
          username: user.nombre_usuario,
          email: user.correo_electronico,
          userType: user.rol,
        },
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

module.exports = {
  loginUser,
  contarUsuarios,
};
