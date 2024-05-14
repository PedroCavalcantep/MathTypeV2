const pool = require('./connection')


const createImage = async (image) => {
    try {
        const result = await pool.query(
            'INSERT INTO images (imagem) VALUES ($1) RETURNING *',
            [image]
        )
        return result.rows[0]    
    }
     catch (error) {
        throw(error)
    }
}

const getImageFromDB = async (id) => {
        const query = "SELECT * FROM images WHERE id = $1"
        const result = await pool.query(query, [id])

        return result.rows[0]
}


module.exports = {
    createImage,
    getImageFromDB,
}