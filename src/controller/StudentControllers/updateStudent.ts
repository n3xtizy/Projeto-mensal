import { Request, Response } from 'express';
import { StudentRepository } from '../../database/repositories/student.repository';

export class UpdateStudent {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      await StudentRepository.update(id, request.body);
      return response.status(200).json({ message: 'Student Updated!' });
    } catch (error) {
      return response.status(500).json({ message: 'Error' });
    }
  }
}
