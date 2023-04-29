import { Request, Response } from 'express';
import { ClassroomRepository } from '../../database/repositories/classroom.repository';

export class RemoveClassroom {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      await ClassroomRepository.delete(id);
      return response.status(200).json({ message: 'Classroom Deleted!' });
    } catch (error) {
      return response.status(500).json({ message: 'Error' });
    }
  }
}
