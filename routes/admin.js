var routes = require("express").Router();
const {
  createAdmin,
  getAdmin,
  deleteAdmin,
} = require("../controllers/admin");
const { createAdminSchema } = require("../validations/admin");

routes.get("/getAdmin", getAdmin);
routes.post("/createAdmin", createAdminSchema, createAdmin);
routes.delete("/deleteAdmin", createAdminSchema, deleteAdmin);

module.exports = routes;