// const mysql = require("mysql2/promise");
const pg = require("pg");
require("dotenv").config();
const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});
module.exports = pool;
