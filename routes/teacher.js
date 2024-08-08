var routes = require("express").Router();
const {
  createTeahcer,
  getTeacher,
  deleteTeacher,
} = require("../controllers/teacher");
const { createTeacherSchema } = require("../validations/teacher");

routes.get("/getTeacher", getTeacher);
routes.post("/createTeacher", createTeacherSchema, createTeahcer);
routes.delete("/deleteTeacher", createTeacherSchema, deleteTeacher);

module.exports = routes;