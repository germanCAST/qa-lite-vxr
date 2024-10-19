const express = require("express");
const router = express.Router();
const { contarCasos } = require("../controllers/casoController");

router.get("/count", contarCasos);

module.exports = router;
