const express = require("express");
const router = express.Router();

const {
  defectosById,
  getAllDefectos,
} = require("../controllers/defectoController");

router.get("/getDefectosById/:id", defectosById);
router.get("/getAllDefectos", getAllDefectos);

module.exports = router;
