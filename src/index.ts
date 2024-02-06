import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import router from './router/song.route';
import dotenv from "dotenv"
dotenv.config()
mongoose.connect(process.env.MONGO!).then(()=>{
  console.log("database connected")
}).catch((error) => console.log(error))
const app = express();
app.use(express.json());
app.use("/api/song", router)
const port = process.env.PORT || 3000;
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript Express!');
  });
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });