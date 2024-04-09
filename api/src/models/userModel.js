const pool = require("./connection");

const getAll = async () => {
  const users = await pool.query("SELECT id, nome, email,senha FROM usuario");
  return users.rows;
};

const createUser = async (user) => {
  const { nome, email, senha } = user;
  const query = "INSERT INTO usuario(nome, email, senha) VALUES ($1, $2, $3) RETURNING *";

  const createdUser = await pool.query(query, [nome, email, senha]);

  return createdUser.rows;
};

const deleteUser = async (id) => {
  const removedUser = await pool.query("DELETE FROM usuario WHERE id = $1", [id]);
  return removedUser.rows;
};

const updateUser = async (id, usuario) => {
  const query = "UPDATE usuario SET nome = $1, email = $2, senha = $3 WHERE id = $4";
  const { nome, email, senha } = usuario;
  const updatedTask = await pool.query(query, [nome, email, senha, id]);
  return updatedTask.rows;
};

const topScore = async () => {
  const query =
    'SELECT usuario.nome, scores.score FROM usuario INNER JOIN scores ON usuario.id = scores.id_usuario ORDER BY "score" desc LIMIT 100 ';
  const topscore = await pool.query(query);
  return topscore.rows;
};

module.exports = {
  getAll,
  createUser,
  deleteUser,
  updateUser,
  topScore,
};
