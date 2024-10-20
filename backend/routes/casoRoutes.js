const express = require("express");
const router = express.Router();
const { contarCasos, casosUsoById } = require("../controllers/casoController");

router.get("/count", contarCasos);
router.get("/getCasosById/:id", casosUsoById);

module.exports = router;
