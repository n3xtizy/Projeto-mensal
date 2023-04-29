import { Request, Response } from 'express';
import { StudentRepository } from '../../database/repositories/student.repository';

export class RemoveStudent {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      await StudentRepository.delete(id);
      return response.status(200).json({ message: 'Student Deleted!' });
    } catch (error) {
      return response.status(500).json({ message: 'Error' });
    }
  }
}
