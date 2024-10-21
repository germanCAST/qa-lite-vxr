import React, { useState } from "react";

const CreateProjectForm: React.FC = () => {
  const [projectName, setProjectName] = useState<string>("");
  const [projectDescription, setProjectDescription] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Aquí puedes manejar el envío del formulario y guardar el nuevo proyecto.
    console.log("Nuevo proyecto creado:", { projectName, projectDescription });
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-2xl font-bold mb-6">Crear Nuevo Proyecto</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-md dark:bg-gray-900 text-gray-900 dark:text-gray-100"
      >
        <div className="mb-4 ">
          <label htmlFor="name" className="block text-sm font-medium">
            Nombre del Proyecto
          </label>
          <input
            type="text"
            id="name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium">
            Descripción
          </label>
          <textarea
            id="description"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>

        <div className="mb-4 ">
          <label htmlFor="name" className="block text-sm font-medium">
            Fecha de inicio del proyecto
          </label>
          <input
            type="text"
            id="name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="mb-4 ">
          <label htmlFor="name" className="block text-sm font-medium">
            Fecha de fecha de finalizacion aproximada
          </label>
          <input
            type="text"
            id="name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700"
        >
          Crear Proyecto
        </button>
      </form>
    </div>
  );
};

export default CreateProjectForm;
