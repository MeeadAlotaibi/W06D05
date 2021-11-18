const { model, models } = require("mongoose");
const studentSchema = require("../../db/models/studentSchema"); // سوينا استدعاء للسكيما من ملف السكيما

const studentFunc = (req, res) => {
  const { name, idStudent, mobileNumber, age } = req.body; // اطلب من المستخدم يدخل البيانات اللي ابيها .. من البودي
  studentFunc
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

/////////  ?!
const anotherFunc = (req, res) =>{
  studentFunc
    .find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = { studentFunc, anotherFunc };