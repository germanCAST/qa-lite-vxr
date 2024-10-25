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

const getAllDefectos = async (req, res, next) => {
  try {
    const query = `
    SELECT 
    d.id AS defecto_id,
    d.descripcion AS defecto_descripcion,
    d.estado AS defecto_estado,
    d.prioridad AS defecto_prioridad,
    d.fecha_creacion AS defecto_fecha_creacion,
    d.fecha_actualizacion AS defecto_fecha_actualizacion,
    d.creado_por AS creador_id,
    uc.nombre AS creador_nombre,
    uc.apellido AS creador_apellido,
    d.asignado_a AS asignado_id,
    ua.nombre AS asignado_nombre,
    ua.apellido AS asignado_apellido,
    cp.id AS caso_prueba_id,
    cp.titulo AS caso_prueba_titulo  -- Obtenemos el título del caso de prueba
    FROM 
    public.defectos d
    JOIN 
    public.usuarios uc ON d.creado_por = uc.id  -- Join para obtener datos del creador
    JOIN 
    public.usuarios ua ON d.asignado_a = ua.id  -- Join para obtener datos del usuario asignado
    JOIN 
    public.casos_prueba cp ON d.id_caso_prueba = cp.id  -- Join para obtener datos del caso de prueba
    ORDER BY 
    d.id ASC;
    `;

    const result = await pool.query(query);

    if (result.rows.length <= 0) {
      return res.status(400).json({
        error: "No se encontraron defectos",
        data: null,
      });
    }
    res.status(200).json(result.rows);
  } catch (error) {
    next(error);
  }
};

module.exports = { defectosById, getAllDefectos };
