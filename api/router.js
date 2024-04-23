const express = require("express");

const router = express.Router();

const userController = require("./src/controllers/userController");

router.get("/User", userController.listAll);

router.post("/User", userController.createUser);

router.delete("/deleteUser/:id", userController.deleteUser);

router.get("/User/:id", userController.getUser);

module.exports = router;