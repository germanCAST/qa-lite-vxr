import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    nombre: string;
    descripcion: string;
    creado_por: string;
    fecha_inicio: string;
    fecha_fin: string;
  } | null;
}

const EditModal: React.FC<ModalProps> = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{project.nombre}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-100"
          >
            X
          </button>
        </div>
        <p>
          <strong>Descripción:</strong> {project.descripcion}
        </p>
        <p>
          <strong>Creado por:</strong> {project.creado_por}
        </p>
        <p>
          <strong>Fecha de inicio:</strong> {project.fecha_inicio}
        </p>
        <p>
          <strong>Fecha de fin:</strong> {project.fecha_fin}
        </p>
        <button
          onClick={onClose}
          className="mt-4 w-full py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default EditModal;
