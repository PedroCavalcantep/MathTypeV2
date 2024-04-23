const pool = require("./connection");

const listAll = async () => {
    const query = "SELECT * FROM users"
    const user = await pool.query(query);
    return user.rows;
    
}

const createUser = async (users) => {
    const {
        nome,
        email,
        senha
    } = users;
    const query = "INSERT INTO users (nome, email, senha) VALUES ($1, $2, $3) RETURNING *"
    const createdUser = await pool.query(query, [nome, email, senha]);
    return createdUser.rows;
}

const deleteUser = async (id) => {
    const query = "DELETE FROM users WHERE id = $1"
    const deletedUser = await pool.query(query, [id]);
    return deletedUser.rows;
}

const getUser = async (id) => {
    const query = "SELECT * FROM users WHERE id = $1"
    const getUser = await pool.query(query, [id]);
    return getUser.rows;
}

module.exports = {
    listAll,
    createUser,
    deleteUser,
    getUser,
};