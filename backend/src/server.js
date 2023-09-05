const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./routes/routes.js");

const server = express();

server.use(express.json());

server.use(cors());
server.use(morgan("dev"));

server.use("/", routes);

server.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});

module.exports = server;
