import { Request, Response } from 'express';
import { StudentRepository } from '../../database/repositories/student.repository';


export class GetStudent {
  public async handle(request: Request, response: Response): Promise<Response> {
    try {
      const students = await StudentRepository.find();
      return response.json(students);
    } catch (error) {
      return response.status(500).json({ message: 'Error' });
    }
  }
}