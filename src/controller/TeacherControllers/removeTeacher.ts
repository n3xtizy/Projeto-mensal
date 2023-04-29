import { Request, Response } from 'express';
import { TeacherRepository } from '../../database/repositories/teacher.repository';

export class RemoveTeacher {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      await TeacherRepository.delete(id);
      return response.status(200).json({ message: 'Teacher Deleted!' });
    } catch (error) {
      return response.status(500).json({ message: 'Error' });
    }
  }
}
