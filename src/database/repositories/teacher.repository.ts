import { AppDataSource } from "../../../data-source";
import { Teacher } from "../entity/Teacher";

export const TeacherRepository = AppDataSource.getRepository(Teacher)