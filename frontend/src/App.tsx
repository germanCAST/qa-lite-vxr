// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import "./App.css";
import { useEffect } from "react";
import Dashboard from "./pages/Dashboard";

function App() {
  useEffect(() => {
    // Agregar la clase "dark" al cargar la aplicación
    document.documentElement.classList.add("dark");
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />{" "}
        {/* Ruta definida */}
      </Routes>
    </Router>
  );
}

export default App;
