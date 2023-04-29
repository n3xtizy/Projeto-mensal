import { Request, Response } from 'express';
import { CourseRepository } from '../../database/repositories/course.repository';

export class RemoveCourse {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      await CourseRepository.delete(id);
      return response.status(200).json({ message: 'Course Deleted!' });
    } catch (error) {
      return response.status(500).json({ message: 'Error' });
    }
  }
}
