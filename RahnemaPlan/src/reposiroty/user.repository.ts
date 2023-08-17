import { v4 } from "uuid"
import { Role, user } from "../model/user"
import { Repository } from "typeorm"
import { User } from "../entity/User"
import { AppDataSource } from "../utility/data-source";


export class userRepository{

    private userRepo :Repository<User>;
    constructor() {
        this.userRepo = AppDataSource.getRepository(User);
    }

    async findByUsername(username:string):Promise<User | null>{
        const usernameExists = await this.userRepo.findOneBy({username})
        return usernameExists
    }
    async createuser(firstName:string, lastName:string, username:string, password:string, role:Role):Promise<User>{
        const users = await this.userRepo.save({firstName:firstName, lastName:lastName, username:username, password:password, role:role})
        return users
    }

    async loginuser(username:string, password:string):Promise<User | null>{
        const logginuser = await this.userRepo.findOneBy({username:username, password:password})
        return logginuser
    }
}
