import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "../entity/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 3307,
    username: "root",
    password: "password",
    database: "porsi",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
