import { Express } from "express";
import { AppDataSource } from "../../utility/data-source";
import { userservice } from "../../service/user.service";
import { User } from "../../entity/User";
import { after } from "node:test";
import { DataSource } from "typeorm";

describe("login user", ()=>{
    let app : Express;
    const testuser =  new userservice()
    beforeAll(async() =>{
        const dataSource = await AppDataSource.initialize();
        
    })
    
    afterAll(async()=>{
        await AppDataSource.close()
    })
    describe("test correct login for username and password correctly",()=>{
        it("should pass from username rep password rep12345", async ()=>{
            const user = await testuser.login("rep", "rep12345")
            expect(user.id).toEqual(2)
    })})

    describe("test wrong login for user with wrong username",()=>{
        it("should not  pass from username repo password rep12345", ()=>{

            expect(()=>  testuser.login("repo","rep12345")).rejects.toThrow(Error)
        })
    })

    describe("test wrong login for user with wrong password",()=>{
        it("should not  pass from username rep password rep12543", ()=>{
            expect(testuser.login("repo","rep12543")).rejects.toThrow(Error)
        })
    }) 
});
describe("signup user", ()=>{
    let app : Express;
    const testuser =  new userservice()
    beforeAll(async() =>{
        const dataSource = await AppDataSource.initialize();      
    })

    afterAll(async()=>{
        await AppDataSource.close()
    })

    describe("test correct signup for uniqusername and password correctly",()=>{
        it("should not  pass from username rep password rep12345",  ()=>{
            expect(testuser.CreateUser("test","test,","rep", "rep12345", "Customer")).rejects.toThrow(Error)
    })})
})
