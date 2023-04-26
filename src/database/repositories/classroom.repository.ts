import { AppDataSource } from "../../../data-source";
import { Classroom } from "../entity/Classroom";

export const ClassroomRepository = AppDataSource.getRepository(Classroom)