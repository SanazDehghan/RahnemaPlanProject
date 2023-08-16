import { Express } from "express";
import { app as userRoute } from "./src/routes/user.route";
import "reflect-metadata"

const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.use(userRoute);

app.listen(3000,()=>{
    console.log("Server is listening on port 3000");
})