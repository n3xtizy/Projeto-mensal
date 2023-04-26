import 'reflect-metadata'
import 'dotenv/config'

import { DataSource } from "typeorm";
import { Student } from './src/database/entity/Student';
import { Classroom } from "./src/database/entity/Classroom";
import { Course } from './src/database/entity/Course';
import { Teacher } from './src/database/entity/Teacher';

const port = process.env.DB_PORT as unknown as number | undefined

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: port,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [Student,Teacher,Course,Classroom],
    synchronize: false,

})