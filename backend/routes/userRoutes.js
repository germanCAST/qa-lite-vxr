const express = require("express");
const router = express.Router();
const {
  loginUser,
  contarUsuarios,
  getAllUsuarios,
} = require("../controllers/userController");

router.post("/login", loginUser);
router.get("/count", contarUsuarios);
router.get("/getAllUsuarios", getAllUsuarios);

module.exports = router;
