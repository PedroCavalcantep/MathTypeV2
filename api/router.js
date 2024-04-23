const express = require("express");

const router = express.Router();

const userController = require("./src/controllers/userController");
const scoreController = require("./src/controllers/scoreController");

<<<<<<< Updated upstream
router.get("/User", userController.listAll);

router.post("/User", userController.createUser);

router.delete("/deleteUser/:id", userController.deleteUser);

router.get("/User/:id", userController.getUser);

router.post("/userLogin",  userController.loginUser);
=======
router.get("/Score", scoreController.listAll);
>>>>>>> Stashed changes

module.exports = router;