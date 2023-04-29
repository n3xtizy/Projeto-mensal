import { Request, Response } from 'express';
import { GetCourse } from './getCourse';
import { SaveCourse } from './saveCourse';
import { UpdateCourse } from './updateCourse';
import { RemoveCourse } from './removeCourse';

export class CourseController {
  public async getCourse(request: Request, response: Response): Promise<Response> {
    const getCourse = new GetCourse();
    return getCourse.handle(request, response);
  }

  public async saveCourse(request: Request, response: Response): Promise<Response> {
    const saveCourse = new SaveCourse();
    return saveCourse.handle(request, response);
  }

  public async updateCourse(request: Request, response: Response): Promise<Response> {
    const updateCourse = new UpdateCourse();
    return updateCourse.handle(request, response);
  }

  public async removeCourse(request: Request, response: Response): Promise<Response> {
    const removeCourse = new RemoveCourse();
    return removeCourse.handle(request, response);
  }
}
