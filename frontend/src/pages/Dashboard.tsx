import React, { useState, useEffect } from "react";
import { Proyecto } from "../types/Proyecto";
import { format } from "date-fns";
import { Usuario } from "../types/Usuario";

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<Usuario | null>(null);
  const [proyectos, setProyectos] = useState<Proyecto[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProyectos, setTotalProyectos] = useState();
  const [totalUsuarios, setTotalUsuarios] = useState();
  const [totalCasos, setTotalCasos] = useState();
  const itemsPerPage = 8;

  // Obtener datos del usuario desde el almacenamiento local
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    const fetchProyectos = async () => {
      try {
        const response = await fetch("/api/data/proyectos"); // URL de tu endpoint
        if (response.ok) {
          const data = await response.json();
          setProyectos(data); // Guardar los datos en el estado
        } else {
          console.error("Error fetching proyectos data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    const fetchProjectCount = async () => {
      try {
        const response = await fetch("/api/data/proyectos/count"); // URL de tu endpoint para obtener el conteo
        if (response.ok) {
          const data = await response.json();
          setTotalProyectos(data.total); // Guardar el total de proyectos en el estado
        } else {
          console.error("Error fetching project count");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    const fetchUserCount = async () => {
      try {
        const response = await fetch("/api/auth/count"); // URL de tu endpoint para obtener el conteo
        if (response.ok) {
          const data = await response.json();
          setTotalUsuarios(data.total); // Guardar el total de proyectos en el estado
        } else {
          console.error("Error fetching project count");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    const fecthCasoCount = async () => {
      try {
        const response = await fetch("/api/casos/count");
        if (response.ok) {
          const data = await response.json();
          setTotalCasos(data.total_casos);
        } else {
          console.error("Error fetching casos count");
        }
      } catch (error) {
        console.error("Error: ", error);
      }
    };

    fetchUserCount();
    fetchProjectCount();
    fecthCasoCount();
    fetchProyectos();
  }, []);

  // Calcular los índices de los elementos a mostrar en la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = proyectos.slice(indexOfFirstItem, indexOfLastItem);

  // Calcular el número total de páginas
  const totalPages = Math.ceil(proyectos.length / itemsPerPage);

  // Funciones para cambiar de página
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen w-full flex bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 shadow-lg p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-8">Qa lite - VXR</h1>
          <nav className="space-y-6">
            <a
              href="#dashboard"
              className="block py-2 px-4 rounded hover:bg-gray-100 dark:hover:bg-gray-700 font-medium"
            >
              Dashboard
            </a>
            {/* Otras secciones del menú */}
          </nav>
        </div>

        <div className="mt-8">
          <div className="flex items-center space-x-4">
            <div>
              <p className="font-semibold">
                {user?.name || "Nombre de usuario"}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {user?.userType || "Tipo de usuario"}
              </p>
            </div>
            <img
              src={`https://ui-avatars.com/api/?name=${user?.name}&background=random&color=fff`}
              alt="Foto de perfil"
              className="w-12 h-12 rounded-full"
            />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 space-y-6 overflow-y-auto">
        {/* Header */}
        <header className="flex justify-between items-center w-full">
          <h2 className="text-2xl font-bold">
            Hola, {user?.name || "Usuario"}
          </h2>
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 bg-white dark:bg-gray-800 rounded-md border border-gray-300 dark:border-gray-700 shadow-sm"
          />
        </header>

        {/* Cards Section */}
        <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Proyectos</h3>
            <p className="text-3xl font-bold">{totalProyectos}</p>
            <p className="text-green-500 mt-1">+16% este mes</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Colaboradores</h3>
            <p className="text-3xl font-bold">{totalUsuarios}</p>
            <p className="text-red-500 mt-1">-1% este mes</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Casos</h3>
            <p className="text-3xl font-bold">{totalCasos}</p>
            <div className="flex mt-2 space-x-2">
              {/* Ejemplo de avatares */}
              <img
                src="https://via.placeholder.com/24"
                alt="User 1"
                className="w-6 h-6 rounded-full"
              />
              <img
                src="https://via.placeholder.com/24"
                alt="User 2"
                className="w-6 h-6 rounded-full"
              />
              <img
                src="https://via.placeholder.com/24"
                alt="User 3"
                className="w-6 h-6 rounded-full"
              />
            </div>
          </div>
        </section>

        {/* Table Section */}
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
                </tr>
              </thead>
              <tbody>
                {currentItems.length > 0 ? (
                  currentItems.map((proyecto) => (
                    <tr key={proyecto.id}>
                      <td className="px-4 py-4 border-b">{proyecto.nombre}</td>
                      <td
                        className="px-4 py-4 border-b max-w-xs overflow-hidden text-ellipsis whitespace-nowrap"
                        title={proyecto.descripcion}
                      >
                        {proyecto.descripcion}
                      </td>
                      <td className="px-4 py-2 border-b">
                        <span
                          className={`px-2 py-1 rounded-full ${
                            proyecto.estado === "cerrado"
                              ? "bg-red-100 text-red-600"
                              : proyecto.estado === "en progreso"
                              ? "bg-yellow-100 text-yellow-600"
                              : proyecto.estado === "resuelto"
                              ? "bg-blue-100 text-blue-600"
                              : proyecto.estado === "abierto"
                              ? "bg-green-100 text-green-600"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {proyecto.estado}
                        </span>
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

          {/* Paginación */}
          <div className="flex justify-between mt-4">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-300 rounded-md disabled:opacity-50"
            >
              Anterior
            </button>
            <span className="px-4 py-2">
              Página {currentPage} de {totalPages}
            </span>
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-300 rounded-md disabled:opacity-50"
            >
              Siguiente
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
