import { Router } from "express";
import { userRepository } from "../reposiroty/user.repository";
import { userservice } from "../service/user.service";
import  { ZodError, z } from "zod";

export const app = Router()

const ourusers: userRepository= new userRepository()
const useuserservice:userservice = new userservice()
app.post("/signUp", async (req, res, next)=>{
    const validateSignup = z.object({
        firstname:z.string().nonempty(),
        lastname:z.string().nonempty(),
        username:z.string(),
        password:z.string().min(7),
        role:z.enum(["Admin", "Representative" ,"Customer"])
    })
    // type signupUser = z.infer<typeof validateSignup> ???
    try{
        const {firstname, lastname, username, password, role} = validateSignup.parse(req.body)
        await useuserservice.CreateUser(firstname, lastname, username, password, role)
        res.status(200).send("user create correctly!!")
    }catch(e){
        if(e instanceof ZodError){
            console.log(e.message)
            return res.status(403).send("validation have error")
        }
        return res.status(400).send("Bad Request")
    }
})

app.post("/login", async (req,res)=>{
    const validateLogin =z.object({
        username:z.string().nonempty(),
        password:z.string().min(7)
    })
    try{
        const {username, password} = validateLogin.parse(req.body)
        const user = await useuserservice.login(username, password)
        res.status(200).json(user)
    }catch(e){
        if (e instanceof ZodError){
            return res.status(400).send("Bad request")
        }
        return res.status(400).send("username does not exist.")
    }
    
}
)