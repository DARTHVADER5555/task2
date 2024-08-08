var routes = require("express").Router();
const {
  createStudent,
  getStudent,
  deleteStudent,
} = require("../controllers/student");
const { createStudentSchema } = require("../validations/student");

routes.get("/getStudent", getStudent);
routes.post("/createStudent", createStudentSchema, createStudent);
routes.delete("/deleteStudent", createStudentSchema, deleteStudent);

module.exports = routes;