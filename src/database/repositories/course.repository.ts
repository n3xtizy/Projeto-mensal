import { AppDataSource } from "../../../data-source";
import { Course } from "../entity/Course";

export const CourseRepository = AppDataSource.getRepository(Course)