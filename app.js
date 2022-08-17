import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";


const app = express();
app.use(express.json())

app.use('/api/user', router)

mongoose
  .connect(
    "mongodb+srv://admin:1234@cluster0.tqhmowx.mongodb.net/Blog?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(()=> console.log("Connected DB >>> <<<"))
  .catch((err) => console.log(err));


