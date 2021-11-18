const express = require("express");
const { studentFunc, anotherFunc } = require("./../controllers/student.js");
const studentRouter = express.Router(); /// تعامل مع الإند بوينت و الكنترولر



studentRouter.get("/studentEndpoint" , studentFunc);  /// الباث للركوست + استدعاء الكنترولر = الراوتر 
studentRouter.get("/anotherEndpoint" , anotherFunc); /// الباث للركوست + استدعاء الكنترولر = الراوتر 


module.exports = studentRouter ; 
