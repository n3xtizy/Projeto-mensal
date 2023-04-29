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
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'mensal',
    entities: [Student,Teacher,Course,Classroom],
    synchronize: true,

})