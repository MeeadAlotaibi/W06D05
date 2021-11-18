const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const DB = process.env.DB; 



const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};


/////// اللي يحصل هنا عملية ربط بين الباك اند و المونقو 

mongoose.connect(`mongodb://localhost:27017/${DB}`, options).then(
  () => {
    console.log("DB Ready To Use");
  },
  (err) => {
    console.log(err);
  }
);