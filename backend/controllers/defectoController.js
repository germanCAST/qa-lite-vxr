const pool = require("../config/db");

const defectosById = async (req, res, next) => {
  const proyectoId = req.params.id;

  if (!proyectoId) {
    return res
      .status(400)
      .json({ error: "El ID del proyecto es requerido", data: null });
  }

  try {
    const query = `
    SELECT 
    d.id,
    d.descripcion,
    d.estado,
    d.prioridad
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
        AND d.id IS NOT NULL
    ORDER BY 
        p.id, cu.id, cp.id, d.id;
    `;

    const result = await pool.query(query, [proyectoId]);
    //controlar que si no retorna nada de un 200 y muestre que
    console.log(result);
    if (result.rows.length <= 0) {
      return res.status(200).json({
        error: "No se encontraron defectos creados del proyecto",
        data: null,
      });
    }
    res.status(200).json(result.rows);
  } catch (error) {
    next(error);
  }
};

module.exports = { defectosById };
