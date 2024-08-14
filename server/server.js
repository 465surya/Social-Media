import mongoose from "mongoose";
import express from "express";
import router from "./routes/userRouter.js";
import router1 from "./routes/shortRouter.js";
import router2 from "./routes/postRouting.js";
import router3 from "./routes/loginRouting.js";
import cors from "cors"

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api',router)
app.use('/shot',router1)
app.use('/post',router2)
app.use('/login',router3)

app.listen(3000);
mongoose.connect(
    "mongodb+srv://surya465:splegend465@cluster0.7dhv7.mongodb.net/market?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("DB connected")) //if it work
  .catch((err) => console.log(err)); //if doesnt work




  