const express = require("express");
const router = express.Router();
const {
  contarCasos,
  casosUsoById,
  casosPruebaById,
  obtenerAllCasosPrueba,
  obtenerAllCasosUso,
  updateCasoPrueba,
  eliminarCasoPrueba,
  crearCasoPrueba,
} = require("../controllers/casoController");

router.get("/count", contarCasos);
router.get("/getCasosById/:id", casosUsoById);
router.get("/getCasosPruebaById/:id", casosPruebaById);
router.get("/getAllCasosUso", obtenerAllCasosUso);
router.get("/getAllCasosPrueba", obtenerAllCasosPrueba);
router.post("/updateCasoPrueba", updateCasoPrueba);
router.post("/crearCasoPrueba", crearCasoPrueba);
router.delete("/deleteCasoPrueba", eliminarCasoPrueba);

// /api/casos/deleteCasoPrueba

module.exports = router;
