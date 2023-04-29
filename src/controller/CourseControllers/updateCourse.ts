import { Request, Response } from 'express';
import { CourseRepository } from '../../database/repositories/course.repository';

export class UpdateCourse {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      await CourseRepository.update(id, request.body);
      return response.status(200).json({ message: 'Course Updated!' });
    } catch (error) {
      return response.status(500).json({ message: 'Error' });
    }
  }
}
