import React, { useState } from "react";
import { Proyecto } from "../../types/Proyecto";
import { format } from "date-fns";
import { EditModal, EstadoTag, ViewModal } from "../index";
import { HiEye, HiPencilAlt, HiTrash } from "react-icons/hi";

interface TableSectionProps {
  proyectos: Proyecto[];
}

const TableSection: React.FC<TableSectionProps> = ({ proyectos }) => {
  const [selectedProject, setSelectedProject] = useState<Proyecto | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const openViewModal = (project: Proyecto) => {
    setSelectedProject(project);
    setIsViewModalOpen(true);
  };

  const closeViewModal = () => {
    setSelectedProject(null);
    setIsViewModalOpen(false);
  };

  const openEditModal = (project: Proyecto) => {
    setSelectedProject(project);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setSelectedProject(null);
    setIsEditModalOpen(false);
  };

  return (
    <>
      <section className="w-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-bold mb-4">Proyectos</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b text-left">Proyecto</th>
                <th className="px-4 py-2 border-b text-left">Descripcion</th>
                <th className="px-4 py-2 border-b text-left">Estado</th>
                <th className="px-4 py-2 border-b text-left">Creado por</th>
                <th className="px-4 py-2 border-b text-left">
                  Fecha de inicio
                </th>
                <th className="px-4 py-2 border-b text-left">
                  Fecha de finalización
                </th>
                <th className="px-4 py-2 border-b text-left">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {proyectos.length > 0 ? (
                proyectos.map((proyecto) => (
                  <tr key={proyecto.id}>
                    <td className="px-4 py-4 border-b">
                      {proyecto.proyecto_nombre}
                    </td>
                    <td
                      className="px-4 py-4 border-b max-w-xs overflow-hidden text-ellipsis whitespace-nowrap"
                      title={proyecto.proyecto_descripcion}
                    >
                      {proyecto.proyecto_descripcion}
                    </td>
                    <td className="px-4 py-2 border-b">
                      <EstadoTag estado={proyecto.estado} />
                    </td>
                    <td className="px-4 py-2 border-b">
                      {proyecto.creado_por}
                    </td>
                    <td className="px-4 py-2 border-b">
                      {format(new Date(proyecto.fecha_inicio), "dd/MM/yyyy")}
                    </td>
                    <td className="px-4 py-2 border-b">
                      {format(new Date(proyecto.fecha_fin), "dd/MM/yyyy")}
                    </td>
                    <td className="px-4 py-2 border-b">
                      <div className="flex space-x-5">
                        <button
                          onClick={() => openViewModal(proyecto)}
                          className="flex items-center justify-center space-x-1 text-blue-500 hover:text-blue-700"
                        >
                          <i className="text-lg">
                            <HiEye />
                          </i>
                        </button>
                        <button
                          onClick={() => openEditModal(proyecto)}
                          className="flex items-center justify-center space-x-1 text-yellow-500 hover:text-yellow-700"
                        >
                          <i className="text-lg">
                            <HiPencilAlt />
                          </i>
                        </button>
                        <button className="flex items-center justify-center space-x-1 text-red-500 hover:text-red-700">
                          <i className="text-lg">
                            <HiTrash />
                          </i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-4 py-2 text-center">
                    No hay proyectos disponibles.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Modal para ver los detalles del proyecto */}
      <ViewModal
        isOpen={isViewModalOpen}
        onClose={closeViewModal}
        project={selectedProject}
      />
      <EditModal
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
        project={selectedProject}
      />
    </>
  );
};

export default TableSection;