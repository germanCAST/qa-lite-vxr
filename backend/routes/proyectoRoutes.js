const express = require("express");
const router = express.Router();
const {
  obtenerProyectos,
  contarProyectos,
} = require("../controllers/proyectoController");

router.get("/", obtenerProyectos);
router.get("/count", contarProyectos);

module.exports = router;
