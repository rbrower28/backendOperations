const routes = require("express").Router();
// routes.use("/", require("./swagger"));
routes.use("/client", require("./client"))
module.exports = routes;