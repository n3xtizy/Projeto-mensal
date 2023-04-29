import { Request, Response } from 'express';
import { CourseRepository } from '../../database/repositories/course.repository';


export class SaveCourse {
  public async handle(request: Request, response: Response): Promise<Response> {
    try {
      const course = await CourseRepository.save(request.body);
      return response.json(course);
    } catch (error) {
      return response.status(500).json({ message: 'Error' });
    }
  }
}
