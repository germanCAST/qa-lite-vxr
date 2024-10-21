// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import "./App.css";
import { useEffect } from "react";
import Dashboard from "./pages/Dashboard/Dashboard";
import CreateProject from "./pages/CreateProject/CreateProject";
import Layout from "./components/Layout/Layout";

function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <Router>
      <Routes>
        {/* Ruta para Login sin el Sidebar */}
        <Route path="/" element={<Login />} />

        {/* Rutas con Layout y Sidebar */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/proyectos" element={<CreateProject />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
