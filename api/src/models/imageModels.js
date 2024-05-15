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


const deleteImage = async (id) => {
    const query = "DELETE FROM images WHERE id = $1 RETURNING *"
    const result = await pool.query(query, [id])

    return result.rows[0]
}


const updateImage = async (id, image) => {
    try {
        const query = "UPDATE images SET imagem = $1 WHERE id = $2 RETURNING *"
        const result = await pool.query(query, [id, image])
        
        return result.rows[0]
    } 
    catch (error) {
        throw error
    }
}


module.exports = {
	uploadImage,
	getImage,
    deleteImage,
    updateImage
}
