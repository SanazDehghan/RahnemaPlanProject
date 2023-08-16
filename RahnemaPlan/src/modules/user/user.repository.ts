import { v4 } from "uuid"
import { Role, user } from "./model/user"


export class userRepository{

    private users:user[]=[]

    public createuser(username:string, password:string, role:Role){
        const users = this.users.push({id:v4(), username:username, password:password, role:role})
        return users
    }

    public loginuser(username:string, password:string){
        const user = this.users.find((x)=>x.username == username && x.password == password)
        return user?.id
    }
}
