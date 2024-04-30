const express = require("express");

const router = express.Router();

const userController = require("./src/controllers/userController");
const scoreController = require("./src/controllers/scoreController");

// rotas user 

router.get("/user", userController.listAll);

router.post("/user", userController.createUser);

router.delete("/deleteUser/:id", userController.deleteUser);

router.get("/user/:id", userController.getUser);

router.post("/userLogin", userController.loginUser);

// rotas score

router.get("/score", scoreController.listAll);

router.get("/topScore", scoreController.topScore);

router.post("/score", scoreController.createScore);

router.delete("/deleteScore/:id", scoreController.deleteScore);

module.exports = router;