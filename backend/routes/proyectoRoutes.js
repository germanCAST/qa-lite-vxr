const express = require("express");
const router = express.Router();
const {
  obtenerProyectos,
  contarProyectos,
  updateProyecto,
} = require("../controllers/proyectoController");

router.post("/update", updateProyecto);
router.get("/", obtenerProyectos);
router.get("/count", contarProyectos);

module.exports = router;
