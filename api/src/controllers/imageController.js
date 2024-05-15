const imageModel = require("../models/imageModels")

const uploadImage = async (req, res) => {
	const file = req.file

	if (!file) {
		return res.status(400).json({ message: "Nenhuma foto enviada" })
	}

	const image = file.buffer

	try {
		const uploadedImage = await imageModel.uploadImage(image)

		return res.status(201).json({ message: "Foto enviada com sucesso", id: uploadedImage.id })
	} catch (error) {
		return res.status(500).json({ message: "Não consegui enviar" })
	}
}

const getImage = async (req, res) => {
	const id = req.params.id

	try {
		const image = await imageModel.getImage(id)

		const result = image.imagem

		res.setHeader("Content-Type", "image/png")

		res.send(result)
	} catch (error) {
		console.log(error)
		res.status(500).json({ message: "errou ai patrão" })
	}
}

module.exports = {
	uploadImage,
	getImage
}
