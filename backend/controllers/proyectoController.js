const pool = require("../config/db");

const obtenerProyectos = async (req, res, next) => {
  try {
    const result = await pool.query(`
      SELECT 
        p.id, 
        p.nombre, 
        p.descripcion, 
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
};
