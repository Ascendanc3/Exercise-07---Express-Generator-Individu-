const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, require: [true, "Nama harus di isi"] },
  age: { type: String, require: [true, "Umur harus di isi"] },
  status: {
    type: String,
    enum: ["active", "non active"],
    default: "non active",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;