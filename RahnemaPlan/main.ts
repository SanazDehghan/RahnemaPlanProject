import { Express } from "express";
import { app as userRoute } from "./src/controller/user.route";
import "reflect-metadata"
import { AppDataSource } from "./src/utility/data-source";

const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.use(userRoute);

AppDataSource.initialize().then(()=>{
app.listen(3000,()=>{
    console.log("Server is listening on port 3000");
})
})