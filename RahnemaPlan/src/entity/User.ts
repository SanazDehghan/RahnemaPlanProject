import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"
import { Role } from "../model/user";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id!: string;

    @Column()
    firstName!: string;

    @Column()
    lastName!: string;

    @Column({unique:true})
    username!:string;

    @Column()
    password!:string;

    @Column()
    role!:Role

    @CreateDateColumn()
    createdAt!:Date;

    @UpdateDateColumn()
    updateAt!: Date;
}
