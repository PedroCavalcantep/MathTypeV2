const pool = require("./connection");

const listAll = async () => {
    const query = "SELECT * FROM usuario"
    const user = await pool.query(query);
    return user.rows;
}

module.exports = {
    listAll,
};