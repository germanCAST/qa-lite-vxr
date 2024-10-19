const express = require("express");
const router = express.Router();
const { loginUser, contarUsuarios } = require("../controllers/userController");

router.post("/login", loginUser);
router.get("/count", contarUsuarios);

module.exports = router;
