import { Request, Response } from 'express';
import { TeacherRepository } from '../../database/repositories/teacher.repository';

export class UpdateTeacher {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      await TeacherRepository.update(id, request.body);
      return response.status(200).json({ message: 'Teacher Updated!' });
    } catch (error) {
      return response.status(500).json({ message: 'Error' });
    }
  }
}
