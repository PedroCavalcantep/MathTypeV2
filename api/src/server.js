const app = require("./app.js");
// eslint-disable-next-line no-unused-vars
const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
