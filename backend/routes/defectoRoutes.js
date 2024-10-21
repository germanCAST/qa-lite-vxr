const express = require("express");
const router = express.Router();

const { defectosById } = require("../controllers/defectoController");

router.get("/getDefectosById/:id", defectosById);

module.exports = router;
