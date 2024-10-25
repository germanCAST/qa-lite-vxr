SELECT 
  d.id AS defecto_id,
  d.titulo AS defecto_titulo,
  d.descripcion AS defecto_descripcion,
  d.estado AS defecto_estado,
  d.prioridad AS defecto_prioridad,
  d.fecha_creacion AS fecha_creacion_defecto,
  d.fecha_actualizacion AS fecha_actualizacion_defecto,
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

