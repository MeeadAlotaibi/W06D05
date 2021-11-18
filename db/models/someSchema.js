const mongoose = require("mongoose");



const userSchema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Role",
    default: "we copy the id from the role we created in the role schema",
  },
});
const roleSchema = new mongoose.Schema({
  typeOfUser: { type: String, required: true, unique: true },
});


module.exports = mongoose.model("user", userSchema);
module.exports = mongoose.model("role", roleSchema);