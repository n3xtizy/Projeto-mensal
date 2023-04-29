import { Request, Response } from 'express';
import { GetTeacher } from './getTeacher';
import { SaveTeacher } from './saveTeacher';
import { UpdateTeacher } from './updateTeacher';
import { RemoveTeacher } from './removeTeacher';

export class TeacherController {
  public async getTeacher(request: Request, response: Response): Promise<Response> {
    const getTeacher = new GetTeacher();
    return getTeacher.handle(request, response);
  }

  public async saveTeacher(request: Request, response: Response): Promise<Response> {
    const saveTeacher = new SaveTeacher();
    return saveTeacher.handle(request, response);
  }

  public async updateTeacher(request: Request, response: Response): Promise<Response> {
    const updateTeacher = new UpdateTeacher();
    return updateTeacher.handle(request, response);
  }

  public async removeTeacher(request: Request, response: Response): Promise<Response> {
    const removeTeacher = new RemoveTeacher();
    return removeTeacher.handle(request, response);
  }
}
