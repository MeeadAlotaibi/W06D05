const express = require("express");
const dotenv = require("dotenv");
const DB = require("./db/db.js");
const mongoose = require("mongoose");
const morgan = require("morgan"); ////نستدعي بكج مورقن التي تساعد في قراءة الطلب و قراءة الاستجابة 

const studentRouter = require("./routers/routes/student");
///// ميديل ويـــر 
const app = express();
dotenv.config();
app.use(express.json());
const PORT = process.env.PORT;

app.use(morgan("dev")); //// built-in level middleware تساعد في قراءة الطلب و قراءة الاستجابة 

////  هنا نحط الراوتر ميدل وير ،، اقدر احد باث او بدونه  مافيه مشكلة 
app.use("/studentPath", studentRouter);




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
