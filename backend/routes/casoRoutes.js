const express = require("express");
const router = express.Router();
const {
  contarCasos,
  casosUsoById,
  casosPruebaById,
} = require("../controllers/casoController");

router.get("/count", contarCasos);
router.get("/getCasosById/:id", casosUsoById);
router.get("/getCasosPruebaById/:id", casosPruebaById);

module.exports = router;
