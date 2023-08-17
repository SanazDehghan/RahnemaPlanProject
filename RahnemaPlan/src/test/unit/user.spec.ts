import { Express } from "express";
import { AppDataSource } from "../../utility/data-source";
import { userservice } from "../../service/user.service";
import { User } from "../../entity/User";

describe("login user", ()=>{
    let app : Express;
    const testuser =  new userservice()
    beforeAll(async() =>{
        const dataSource = await AppDataSource.initialize();
        
    })
/*     describe("test correct login for username and password correctly",()=>{
        it("should pass from username rep password rep12345", ()=>{
            expect(async ()=>{
                await testuser.login("rep", "rep12345");
            }).toBe(
                {
                    id: 2,
                    firstName: 'rep',
                    lastName: 'repr',
                    username: 'rep',
                    password: 'rep12345',
                    role: 'Representative',
                    createdAt: "2023-08-17T05:11:54.987Z",
                    updateAt: "2023-08-17T05:11:54.987Z"
                }
                )
    })}) */

    describe("test wrong login for user with wrong username",()=>{
        it("should not  pass from username repo password rep12345", ()=>{
            expect(testuser.login("repo","rep12345")).toThrow(Error)
        })
    })

/*     describe("test wrong login for user with wrong password",()=>{
        it("should not  pass from username rep password rep12543", ()=>{
            expect(login("repo","rep12543")).toBe(400)
        })
    })  */
});
/* describe("identify role", ()) */
