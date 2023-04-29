import { Request, Response } from 'express';
import { TeacherRepository } from '../../database/repositories/teacher.repository';


export class GetTeacher {
  public async handle(request: Request, response: Response): Promise<Response> {
    try {
      const teachers = await TeacherRepository.find();
      return response.json(teachers);
    } catch (error) {
      return response.status(500).json({ message: 'Error' });
    }
  }
}