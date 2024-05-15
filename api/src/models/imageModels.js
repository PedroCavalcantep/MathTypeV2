const pool = require("./connection")

const uploadImage = async (image) => {
	try {
		const query = "INSERT INTO images (imagem) VALUES ($1) RETURNING *"
		const result = await pool.query(query, [image])
		return result.rows[0]
	} catch (error) {
		throw error
	}
}

const getImage = async (id) => {
	const query = "SELECT * FROM images WHERE id = $1"
	const result = await pool.query(query, [id])

	return result.rows[0]
}

module.exports = {
	uploadImage,
	getImage
}
