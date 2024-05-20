const express = require("express")
const cookieParser = require("cookie-parser")
const app = express()
const cors = require("cors")

const router = require("./router")

app.use(express.json())
app.use(cookieParser())
app.use(
	cors({
		credentials: true,
		origin: ["http://localhost:3333", "http://localhost:3000"],
	})
)
app.use(router)

module.exports = app
