import React from "react";
import { HiX } from "react-icons/hi";

import { calculateProgress } from "./utils/calculateProgress";
import ProgressBar from "@ramonak/react-progress-bar";

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

const ViewModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  project: proyecto,
}) => {
  if (!isOpen || !proyecto) return null;
  const progress = calculateProgress(proyecto.fecha_inicio, proyecto.fecha_fin);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{proyecto.nombre}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-100"
          >
            <HiX className="w-6 h-6" />
          </button>
        </div>
        <p className="py-4">
          <strong>Tiempo del Proyecto</strong>{" "}
          <p className="py-2">
            <ProgressBar
              completed={Math.floor(progress)}
              bgColor="#3b82f6"
              height="15px"
              labelAlignment="center"
              labelColor="#ffffff"
              labelSize="14px"
            />
          </p>
        </p>
        <p className="py-4">
          <strong>Descripción</strong>
          <div>{proyecto.descripcion}</div>
        </p>
        <p className="py-4">
          <strong>Creado por</strong>
          <div>{proyecto.creado_por}</div>
        </p>

        <p className="py-4">
          <strong>Casos del proyecto</strong>
          <div>casos</div>
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

export default ViewModal;
