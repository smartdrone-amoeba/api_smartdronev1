const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let date = new Date();
date.setHours(date.getHours() + 7);

const userSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true, min: 10 },
  name: { type: String, required: true },
  pekerjaan: { type: String },
  address: { type: String, required: true },
  gender: { type: String, required: true },
  phone: { type: Number, required: true },
  avatar: { type: String },
  status: { type: String },
  battery: { type: String },
  remote: { type: String },
  signal: { type: String },
  projects: [{ type: Schema.Types.ObjectId, ref: "Project" }],
  createdAt: { type: Date, default: date },
  updatedAt: { type: Date, default: date },
});

module.exports = mongoose.model("User", userSchema);
