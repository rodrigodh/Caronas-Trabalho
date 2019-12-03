const express = require("express");

const UserController = require("./controllers/UserController");
const RunsController = require("./controllers/RunsController");

const routes = express.Router();

routes.post("/addruns", RunsController.store);
routes.get("/runs", RunsController.index);
routes.post("/payrun/:id", RunsController.update);
routes.post("/deleteruns", RunsController.destroy);

routes.post("/user", UserController.store);
routes.get("/users", UserController.index);

module.exports = routes;
