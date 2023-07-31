import express from "express";
import loginRouter from "./src/routes/login.js";
import mongoose from "mongoose";

mongoose.connect("mongodb+srv://uodueme:1234@cluster0.snnt44h.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log("database connected"))
.catch(error => console.log(error) )

const app = express();
app.use(express.json());
app.get("/", (req, res) => res.send("hello world"));
app.use("/", loginRouter)
app.listen(3000, () => console.log("Server running on port 3000"));