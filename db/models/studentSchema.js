const mongoose = require("mongoose");


const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  idStudent: { type: Number, required: true, unique: true },
  mobileNumber: { type: Number, unique: true },
  isStudent: { type: String, default: true },
  age: { type: Number },
});


module.exports = mongoose.model("student", studentSchema);