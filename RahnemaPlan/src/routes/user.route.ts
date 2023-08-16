import { Router } from "express";
import { userRepository } from "../modules/user/user.repository";
import { userservice } from "../modules/user/user.service";

export const app = Router()

const ourusers: userRepository= new userRepository
const useuserservice:userservice = new userservice
app.post("/signUp", (req, res)=>{
    const {username, password, role} = req.body
    useuserservice.CreateUser(username, password, role)
    res.status(200).send("user create correctly!!")
})

app.post("/login", (req,res)=>{
    const {username, password} = req.body
    const userid = useuserservice.login(username, password)
    if(userid==null){
        res.status(401).send("this user not found")
    }
    res.status(200).json({"userid":userid})
})