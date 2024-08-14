import express from "express";
import { Mobile } from "../mobile/mobile.js";

const router = express.Router();        

router.get("/data", async (req, res) => {
  console.log(req);
  const data = await Mobile.find();
  res.json(data);
});

router.post('/data',async (req,res)=>{
  const new_data = await new Mobile(req.body);
  new_data.save();
  res.json(new_data);
});

router.delete('/data/:id', async(req,res)=>{
    const data = await Mobile.findByIdAndDelete(req.params.id);
    console.log(req);
    res.json(data);
})

export default router;
