import express from "express";
import { pos } from "../mobile/post.js";

const router2 = express.Router();

router2.get("/data", async (req, res) => {
  console.log(req);
  const data = await pos.find();
  res.json(data);
});

router2.post("/data", async (req, res) => {
  const new_data = await new pos(req.body);
  new_data.save();
  res.json(new_data);
});

router2.delete("/data/:id", async (req, res) => {
  const data = await pos.findByIdAndDelete(req.params.id);
  // console.log(req);
  res.json(data);
});

export default router2;
