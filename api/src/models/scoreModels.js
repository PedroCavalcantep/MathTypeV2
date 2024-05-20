const pool = require("./connection")

const listAll = async () => {
	const query = "SELECT * FROM scores"
	const scores = await pool.query(query)
	return scores.rows
}

const bestScores = async (id_usuario) => {
	const query = 
	`SELECT scores.id_usuario,
			users.nome,
			MAX(scores.score) AS best_score, 
			scores.id_gamemode
	FROM scores
	INNER JOIN users on scores.id_usuario = users.id
	WHERE id_usuario = $1
	GROUP BY id_usuario, users.nome, id_gamemode`
	const scores = await pool.query(query, [id_usuario])
	return scores.rows
}

const topScores = async (id_gamemode) => {
	const query =
		`SELECT users.nome, scores.score, scores.id_gamemode
		FROM users 
		INNER JOIN scores on users.id = scores.id_usuario 
		WHERE id_gamemode = $1 
		ORDER BY score 
		DESC LIMIT 10`
	const scores = await pool.query(query, [id_gamemode])
	return scores.rows
}

const findScore = async (id) => {
	const query = "SELECT * FROM scores WHERE id = $1"
	const score = await pool.query(query, [id])
	return score.rows
}

const createScore = async (scoreData) => {
	const { score, id_usuario, id_gamemode } = scoreData
	const query = "INSERT INTO scores (score, id_usuario, id_gamemode) VALUES ($1, $2, $3) RETURNING *"
	const createdScore = await pool.query(query, [score, id_usuario, id_gamemode])
	return createdScore.rows
}

const deleteScore = async (id) => {
	const query = "DELETE FROM scores WHERE id = $1 RETURNING *"
	const score = await pool.query(query, [id])
	return score.rows
}

module.exports = {
	listAll,
	bestScores,
	topScores,
	findScore,
	createScore,
	deleteScore,
}
