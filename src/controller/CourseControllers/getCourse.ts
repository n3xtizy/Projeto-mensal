import { Request, Response } from 'express';
import { CourseRepository } from '../../database/repositories/course.repository';


export class GetCourse {
  public async handle(request: Request, response: Response): Promise<Response> {
    try {
      const courses = await CourseRepository.find();
      return response.json(courses);
    } catch (error) {
      return response.status(500).json({ message: 'Error' });
    }
  }
}