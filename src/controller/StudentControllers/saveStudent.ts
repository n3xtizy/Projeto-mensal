import { Request, Response } from 'express';
import { StudentRepository } from '../../database/repositories/student.repository';


export class SaveStudent {
  public async handle(request: Request, response: Response): Promise<Response> {
    try {
      const student = await StudentRepository.save(request.body);
      return response.json(student);
    } catch (error) {
      return response.status(500).json({ message: 'Error' });
    }
  }
}
