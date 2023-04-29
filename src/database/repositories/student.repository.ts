import { AppDataSource } from "../../../data-source";
import { Student } from "../entity/Student";

export const StudentRepository = AppDataSource.getRepository(Student)