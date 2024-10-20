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

const casosUsoById = async (req, res, next) => {
  const proyectoId = req.params.id;
  try {
    const query = `
    SELECT 
          p.id AS proyecto_id, 
          p.nombre AS proyecto_nombre, 
          p.estado, 
          cu.id AS caso_uso_id,
          cu.titulo AS caso_uso_titulo,
          cu.descripcion AS caso_uso_descripcion,
          cp.id AS caso_prueba_id,
          cp.titulo AS caso_prueba_titulo,
          cp.descripcion AS caso_prueba_descripcion,
          cp.estado AS caso_prueba_estado,
          d.id AS defecto_id,
          d.descripcion AS defecto_descripcion,
          d.estado AS defecto_estado,
          d.prioridad AS defecto_prioridad
      FROM 
          public.proyectos p
      JOIN 
          public.usuarios u ON p.creado_por = u.id
      LEFT JOIN 
          public.casos_uso cu ON cu.id_proyecto = p.id
      LEFT JOIN 
          public.casos_prueba cp ON cp.id_caso_uso = cu.id
      LEFT JOIN 
          public.defectos d ON d.id_caso_prueba = cp.id
      WHERE 
          p.id = $1
      ORDER BY 
          p.id, cu.id, cp.id, d.id;
    `;

    const result = await pool.query(query, [proyectoId]);
    res.status(200).json(result.rows);
  } catch (error) {
    next(error);
  }
};

module.exports = { contarCasos, casosUsoById };
