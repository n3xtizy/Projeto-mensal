import { Request, Response } from 'express';
import { ClassroomRepository } from '../../database/repositories/classroom.repository';


export class SaveClassroom {
  public async handle(request: Request, response: Response): Promise<Response> {
    try {
      const classroom = await ClassroomRepository.save(request.body);
      return response.json(classroom);
    } catch (error) {
      return response.status(500).json({ message: 'Error' });
    }
  }
}
