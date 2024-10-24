import React, { useEffect, useState } from "react";
import { Usuario } from "../../types";

const CreateProjectForm: React.FC = () => {
  const [user, setUser] = useState<Usuario | null>(null);
  const [proyecto_nombre, setProjectName] = useState<string>("");
  const [proyecto_descripcion, setProjectDescription] = useState<string>("");
  const [fecha_inicio, setStartDate] = useState<string>("");
  const [fecha_fin, setEndDate] = useState<string>("");
  const [estado, setEstado] = useState<string>("abierto");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (
      !proyecto_nombre ||
      !proyecto_descripcion ||
      !fecha_inicio ||
      !fecha_fin ||
      !estado
    ) {
      alert("Todos los campos son requeridos");
      return;
    }

    // Aquí puedes manejar el envío del formulario y guardar el nuevo proyecto
    const nuevoProyecto = {
      proyecto_nombre,
      proyecto_descripcion,
      fecha_inicio,
      fecha_fin,
      estado: estado ?? "abierto",
      creado_por: user ? user.id : "",
    };

    console.log("Nuevo proyecto creado:", nuevoProyecto);
    try {
      //! verificar por que no se envia el body
      const response = await fetch("/api/data/proyectos/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoProyecto),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Proyecto creado exitosamente:", data);
        alert("Proyecto creado con éxito");

        // Limpiar el formulario después de crear el proyecto
        setProjectName("");
        setProjectDescription("");
        setStartDate("");
        setEndDate("");
        setEstado("");
      }

      console.log(response);
    } catch (error) {
      console.error(error);
    }

    // Aquí podrías enviar los datos a una API, como:
    // await fetch('/api/createProject', { method: 'POST', body: JSON.stringify(newProject) })
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-2xl font-bold mb-6">Crear Nuevo Proyecto</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-md dark:bg-gray-900 text-gray-900 dark:text-gray-100"
      >
        {/* Nombre del Proyecto */}
        <div className="mb-4">
          <label htmlFor="projectName" className="block text-sm font-medium">
            Nombre del Proyecto
          </label>
          <input
            type="text"
            id="projectName"
            value={proyecto_nombre}
            onChange={(e) => setProjectName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1 text-black"
          />
        </div>

        {/* Descripción */}
        <div className="mb-4">
          <label
            htmlFor="projectDescription"
            className="block text-sm font-medium"
          >
            Descripción
          </label>
          <textarea
            id="projectDescription"
            value={proyecto_descripcion}
            onChange={(e) => setProjectDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1 text-black"
          />
        </div>

        {/* Fecha de inicio */}
        <div className="mb-4">
          <label htmlFor="startDate" className="block text-sm font-medium">
            Fecha de inicio del proyecto
          </label>
          <input
            type="date"
            id="startDate"
            value={fecha_inicio}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1 text-black"
          />
        </div>

        {/* Fecha de finalización */}
        <div className="mb-4">
          <label htmlFor="endDate" className="block text-sm font-medium">
            Fecha de finalización aproximada
          </label>
          <input
            type="date"
            id="endDate"
            value={fecha_fin}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1 text-black"
          />
        </div>

        {/* Botón de enviar */}
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
