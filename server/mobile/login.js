import mongoose, { Schema } from "mongoose";
const schema3 = new Schema({
  name: String,
  mail: String,
  password: String,
});
export const Login = mongoose.model("login", schema3);
