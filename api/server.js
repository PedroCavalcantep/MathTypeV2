require("dotenv").config();

const app = require("./app");

const port = process.env.PORT ;

app.listen(port, () => {
    console.log(`tá rodando pai http://localhost:${port}`);
}  );