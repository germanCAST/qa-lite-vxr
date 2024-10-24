import React from "react";
import CreateProjectForm from "../CreateProject/CreateProjectForm";

interface HeaderProps {
  userName: string;
  fetchAllData: () => void;
}

const Header: React.FC<HeaderProps> = ({ userName, fetchAllData }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="flex justify-between items-center w-full">
      <h2 className="text-2xl font-bold">Hola, {userName || "Usuario"}</h2>
      <button
        onClick={handleOpenModal}
        className="px-4 py-2 bg-white dark:bg-gray-800 rounded-md border border-gray-300 dark:border-gray-700 shadow-sm"
      >
        Crear proyecto
      </button>
      {isModalOpen && (
        <CreateProjectForm
          onClose={handleCloseModal}
          fetchAllData={fetchAllData}
        ></CreateProjectForm>
      )}
    </header>
  );
};

export default Header;
