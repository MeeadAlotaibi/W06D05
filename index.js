const express = require("express");
const dotenv = require("dotenv");
const DB = require("./db/db.js");
const mongoose = require("mongoose");
const morgan = require("morgan"); ////نستدعي بكج مورقن التي تساعد في قراءة الطلب و قراءة الاستجابة 
const cors = require("cors"); 
const studentRouter = require("./routers/routes/student");
///// ميديل ويـــر 
const app = express(); /// instantiate express انستانتييشن
dotenv.config(); //// استدعينا البيئة المسؤولة عن اخفاء و حفظ البيانات السرية 
app.use(express.json()); ///  اسمها built-in app level middlewar عشان تتعامل مع بيانات الجيسون 
const PORT = process.env.PORT; //// نستدعي البورت تبعنا من ملف دوت إنف
app.use(cors());/// بكج نحتاجها لربط الفرونت بالباك وما تحصل لنا اخطاء 
app.use(morgan("dev")); //// built-in app level middleware تساعد في قراءة الطلب و قراءة الاستجابة 

app.use("/studentPath", studentRouter); ////  هنا نحط الراوتر ميدل وير ،، اقدر احد باث او بدونه  مافيه مشكلة 



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
