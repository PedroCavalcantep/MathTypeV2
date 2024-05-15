const express = require("express")
const router = express.Router()
const multer = require("multer")

const userController = require("./src/controllers/userController")
const scoreController = require("./src/controllers/scoreController")
const imageController = require("./src/controllers/imageController")

//multer config
const storage = multer.memoryStorage()
const upload = multer({ storage })

// rotas user

router.get("/user", userController.listAll)

router.post("/user", userController.createUser)

router.delete("/user/:id", userController.deleteUser)

router.get("/user/:id", userController.getUser)

router.post("/login", userController.loginUser)

router.get("/auth", userController.authCookie)

router.post("/logout", userController.logout)

// rotas score

router.get("/score", scoreController.listAll)

router.get("/topScore", scoreController.topScore)

router.post("/score", scoreController.createScore)

router.delete("/score/:id", scoreController.deleteScore)

//rotas imagens

router.post("/image", upload.single("file"), imageController.uploadImage)
router.get("/image/:id", imageController.getImage)

module.exports = router
