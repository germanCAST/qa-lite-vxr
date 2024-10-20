import React from "react";

interface HeaderProps {
  userName: string;
}

const Header: React.FC<HeaderProps> = ({ userName }) => {
  return (
    <header className="flex justify-between items-center w-full">
      <h2 className="text-2xl font-bold">Hola, {userName || "Usuario"}</h2>
      <input
        type="text"
        placeholder="Search..."
        className="px-4 py-2 bg-white dark:bg-gray-800 rounded-md border border-gray-300 dark:border-gray-700 shadow-sm"
      />
    </header>
  );
};

export default Header;
