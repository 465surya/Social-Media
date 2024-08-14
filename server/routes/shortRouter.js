import express from "express";
import { Reels } from "../mobile/short.js";

const router1 = express.Router();

router1.get("/data", async (req, res) => {
  console.log(req);
  const data = await Reels.find();
  res.json(data);
});

router1.post("/data", async (req, res) => {
  const new_data = await new Reels(req.body);
  new_data.save();
  res.json(new_data);
});

router1.delete("/data/:id", async (req, res) => {
  const data = await Reels.findByIdAndDelete(req.params.id);
  console.log(req);
  res.json(data);
});

export default router1;
