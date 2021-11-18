const express = require("express");
const { studentFunc, anotherFunc } = require("./../controllers/student.js");
const studentRouter = express.Router();



studentRouter.get("/studentEndpoint" , studentFunc);
studentRouter.get("/anotherEndpoint" , anotherFunc);


module.exports = studentRouter ; 
