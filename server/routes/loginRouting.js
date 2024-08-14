import express from "express";
import { Login } from "../mobile/login.js";

const router3 = express.Router();

router3.get("/data", async (req, res) => {
  console.log(req);
  const data = await Login.find();
  res.json(data);
});

router3.post("/data", async (req, res) => {
  const new_data = await new Login(req.body);
  new_data.save();
  res.json(new_data);
});

router3.delete("/data/:id", async (req, res) => {
  const data = await Login.findByIdAndDelete(req.params.id);
  console.log(req);
  res.json(data);
});

export default router3;
