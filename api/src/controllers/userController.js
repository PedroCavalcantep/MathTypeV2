const userModel = require("../models/userModels")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const listAll = async (req, res) => {
	try {
		const users = await userModel.listAll()
		return res.status(200).json({ users })
	} catch (err) {
		return res.status(500).json({ message: "Internal server error" })
	}
}

const createUser = async (req, res) => {
	try {
		const user = await userModel.createUser(req.body)
		return res.status(201).json({ user })
	} catch (err) {
		return res.status(500).json({ error: "nome ou email ja utilizado" })
	}
}

const findUser = async (x) => {
	id = x
	try {
		const user = await userModel.findUser(id)
		return user
	} catch (error) {
		console.log(error)
	}
}

const deleteUser = async (req, res) => {
	const id = req.params.id

	try {
		const user = await findUser(id)
		console.log(user)
		if (user == "") {
			return res.status(404).json({ error: "usuario não encontrado" })
		} else {
			const deletedUser = await userModel.deleteUser(id)
			return res.status(200).json({ deletedUser })
		}
	} catch (error) {
		return res.status(404).json(error)
	}
}

const getUser = async (req, res) => {
	const id = req.params.id

	try {
		const user = await findUser(id)
		console.log(user)

		if (user == "") {
			return res.status(404).json({ error: "usuario não encontrado" })
		} else {
			const getUser = await userModel.getUser(id)
			return res.status(200).json({ getUser })
		}
	} catch (error) {
		return res.status(404).json(error)
	}
}

const loginUser = async (req, res) => {
	try {
		const user = await userModel.loginUser(req.body)
		if (user == "") {
			return res.status(404).json({ message: "Usuario não encontrado" })
		} else {
			const token = jwt.sign({ user }, process.env.SECRET)

			res.cookie("jwt", token, {
				httpOnly: true,
				maxAge: 15 * 24 * 60 * 60 * 1000,
			})
			res.status(201).json({
				message: "Login realizado com sucesso",
			})
		}
	} catch (err) {
		return res.status(404).json(err)
	}
}
const authCookie = async (req, res) => {
	try {
		const cookie = req.cookies["jwt"]
		const claims = jwt.verify(cookie, process.env.SECRET)
		if (!claims) {
			return res.status(401).json({ message: "não autenticado" })
		}
		return res.send(claims)
	} catch (error) {
		return res.status(401).json({ message: "não autenticado" })
	}
}
const logout = async (req, res) => {
	res.cookie("jwt", "", { maxAge: 0 })
	return res.status(200).json({ message: "deslogado com sucesso" })
}

module.exports = {
	listAll,
	createUser,
	deleteUser,
	findUser,
	getUser,
	loginUser,
	authCookie,
	logout,
}
