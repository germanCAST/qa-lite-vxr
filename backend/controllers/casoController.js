const pool = require("../config/db");

const contarCasos = async (req, res, next) => {
  try {
    const result = await pool.query("SELECT COUNT(*) FROM public.casos_uso");
    const count = result.rows[0].count;
    res.status(200).json({ total_casos: parseInt(count, 10) });
  } catch (error) {
    next(err);
  }
};

module.exports = { contarCasos };
