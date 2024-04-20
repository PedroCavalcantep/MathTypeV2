const express = require("express");

const router = express.Router();

const userController = require("./src/controllers/userController");

router.get("/getUser", userController.listAll);

module.exports = router;