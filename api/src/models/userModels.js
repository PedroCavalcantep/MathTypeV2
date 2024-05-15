const pool = require('./connection')

const listAll = async () => {
	const query = 'SELECT * FROM users'
	const user = await pool.query(query)
	return user.rows
}

const createUser = async (users) => {
	const { nome, email, senha } = users
	const query = 'INSERT INTO users (nome, email, senha, id_foto) VALUES ($1, $2, $3, 1 ) RETURNING *'
	const createdUser = await pool.query(query, [nome, email, senha])
	return createdUser.rows
}

const findUser = async (id) => {
	const query = 'SELECT * FROM users WHERE id = $1'
	const user = await pool.query(query, [id])
	return user.rows
}

const deleteUser = async (id) => {
	const query = 'DELETE FROM users WHERE id = $1 RETURNING *'

	const deletedUser = await pool.query(query, [id])
	return deletedUser.rows
}

const getUser = async (id) => {
	const query = 'SELECT * FROM users WHERE id = $1'
	const getUser = await pool.query(query, [id])
	return getUser.rows
}

const loginUser = async (user) => {
	const { email, senha } = user

	const query = 'SELECT * FROM users WHERE email = $1 AND senha = $2'
	const loginUser = await pool.query(query, [email, senha])
	return loginUser.rows[0].id
}

const updateUser = async (users) => {
	const { nome, email, senha, id_foto, id } = users
	const query = 'UPDATE users SET nome = $1, email = $2, senha = $3, id_foto = $4 WHERE id = $5 RETURNING *'
	const updatedUser = await pool.query(query, [nome, email, senha, id_foto, id])
	return updatedUser.rows
}

module.exports = {
	listAll,
	createUser,
	deleteUser,
	getUser,
	findUser,
	loginUser,
	updateUser,
}
