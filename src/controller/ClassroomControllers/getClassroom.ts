import { Request, Response } from 'express';
import { ClassroomRepository } from '../../database/repositories/classroom.repository';


export class GetClassroom {
  public async handle(request: Request, response: Response): Promise<Response> {
    try {
      const classrooms = await ClassroomRepository.find();
      return response.json(classrooms);
    } catch (error) {
      return response.status(500).json({ message: 'Error' });
    }
  }
}