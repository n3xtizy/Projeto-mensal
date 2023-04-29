import { AppDataSource } from "../../data-source";
import { Teacher } from "../database/entity/Teacher";
import { Repository } from 'typeorm';
import { FindTeacherByNameDto } from "../dtos/findTeacherByName.dto";




export class FindTeacherByName {
  private teacherRepository: Repository<Teacher>;

  constructor() {
    this.teacherRepository = AppDataSource.getRepository(Teacher);
  }

  async findTeachersByName(dto: any): Promise<Teacher[]> {
    const teachers = await this.teacherRepository
      .createQueryBuilder('teacher')
      .where('teacher.name LIKE :name', { name: `%${dto.name}%` })
      .getMany();

    return teachers;
  }
}
