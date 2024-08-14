import mongoose, { Schema } from "mongoose";
const schema2 = new Schema({
  name: String,
  place: String,
  Image: String,
});
export const pos = mongoose.model("post", schema2);
