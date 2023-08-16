import { Role } from "./model/user";
import { userRepository } from "./user.repository";

export class userservice{
    private userList:userRepository = new userRepository;

    public CreateUser(username:string, password:string, role:Role){
       const user = this.userList.createuser(username,password,role);
       return user;
    }

    public login(username:string, password:string){
        const userId = this.userList.loginuser(username, password)
        if(!userId){
            try{
                throw new Error("this user not found");
            }
            catch{
                return null
            }
        }
        return userId
    }

}