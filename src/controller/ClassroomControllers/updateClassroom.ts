import { Request, Response } from 'express';
import { ClassroomRepository } from '../../database/repositories/classroom.repository';

export class UpdateClassroom {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      await ClassroomRepository.update(id, request.body);
      return response.status(200).json({ message: 'Classroom Updated!' });
    } catch (error) {
      return response.status(500).json({ message: 'Error' });
    }
  }
}
