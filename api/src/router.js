const express = require("express");
const router = express.Router();
const userController = require("./controllers/userController");
const userMiddleware = require("./middlewares/usersMiddleware");

router.get("/users", userController.getAll);
router.post("/users", userMiddleware.validadeBody, userController.createUser);
router.delete("/users/:id", userController.deleteUser);
router.put("/users/:id", userController.updateTask);
router.get("/scores", userController.topScore);
module.exports = router;
