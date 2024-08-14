import mongoose, { Schema } from "mongoose";
const schema1 = new Schema({
  ids: String,
  channel: String,
  like: String,
  dislike: String,
  share: String,
  comment: String,
});
export const Reels = mongoose.model("short", schema1);
