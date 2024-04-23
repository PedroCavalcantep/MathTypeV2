const pool = require("./connection");

const listAll = async () => {
    const query = "SELECT * FROM scores";
    const score = await pool.query(query);
    return score.rows;
}

module.exports = {
    listAll
};