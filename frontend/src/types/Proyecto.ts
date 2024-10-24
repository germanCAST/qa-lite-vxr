export interface Defecto {
  id: number;
  descripcion: string;
  estado: string;
  prioridad: string;
}

export interface CasoPrueba {
  id: number;
  titulo: string;
  descripcion: string;
  estado: string;
  defectos: Defecto[];
}

export interface CasoUso {
  id: number;
  titulo: string;
  descripcion: string;
  casosPrueba: CasoPrueba[];
}

export interface Proyecto {
  id: number;
  proyecto_nombre: string;
  proyecto_descripcion: string;
  estado: string;
  fecha_inicio: string;
  fecha_fin: string;
  creado_por: string;
  creado_por_id: string;
  casosUso: CasoUso[];
}
