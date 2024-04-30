const pool = require("./connection");

const listAll = async () => {
  const query = "SELECT * FROM scores";
  const score = await pool.query(query);
  return score.rows;
};

const topScore = async () => {
  const query =
  "SELECT users.nome, scores.score FROM users INNER JOIN scores on users.id = scores.id_usuario ORDER BY score DESC LIMIT 10";
  const scores = await pool.query(query);
  return scores.rows
}

const findScore = async (id) => {
  const query = "SELECT * FROM scores WHERE id = $1";
  const score = await pool.query(query, [id]);
  return score.rows;
};

const createScore = async (scoreData) => {
  const {score, id_usuario} = scoreData;
  const query = 
    "INSERT INTO scores (score, id_usuario) VALUES ($1, $2) RETURNING *";
  const createdScore = await pool.query(query, [score, id_usuario]);
  return createdScore.rows;
};

const deleteScore = async (id) => {
   const query = 
     "DELETE FROM scores WHERE id = $1 RETURNING *";
     const deletedScore = await pool.query(query, [id])
     return deletedScore.rows;
};

module.exports = {
    listAll,
    topScore,
    findScore,
    createScore,
    deleteScore,
};