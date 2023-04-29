import { Request, Response } from 'express';
import { TeacherRepository } from '../../database/repositories/teacher.repository';


export class SaveTeacher {
  public async handle(request: Request, response: Response): Promise<Response> {
    try {
      const teacher = await TeacherRepository.save(request.body);
      return response.json(teacher);
    } catch (error) {
      return response.status(500).json({ message: 'Error' });
    }
  }
}
