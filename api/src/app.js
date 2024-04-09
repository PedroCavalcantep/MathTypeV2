const express = require("express");
const app = express();
const router = require("./router.js");

app.use(express.json());
app.use(router);

module.exports = app;
