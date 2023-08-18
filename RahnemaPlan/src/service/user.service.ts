import { User } from "../entity/User";
import { Role } from "../model/user";
import { userRepository } from "../reposiroty/user.repository";


export class userservice{
    private userList:userRepository = new userRepository();

    async CreateUser(firstName:string, lastName:string, username:string, password:string, role:Role){
        const uniqusername = await this.userList.findByUsername(username)
        if (uniqusername !== null){
            throw new Error("this username exists!!!");
        }
        const user = await this.userList.createuser(firstName, lastName, username,password,role);
        return user;
    }

    async login(username:string, password:string){
        const user = await this.userList.loginuser(username, password)
        if(user === null){
                throw new Error("this user not found");

        }
        return user
    }

}