import { Request, Response } from 'express';
import { GetClassroom } from './getClassroom';
import { SaveClassroom } from './saveClassroom';
import { UpdateClassroom } from './updateClassroom';
import { RemoveClassroom } from './removeClassroom';

export class ClassroomController {
  public async getClassroom(request: Request, response: Response): Promise<Response> {
    const getClassroom = new GetClassroom();
    return getClassroom.handle(request, response);
  }

  public async saveClassroom(request: Request, response: Response): Promise<Response> {
    const saveClassroom = new SaveClassroom();
    return saveClassroom.handle(request, response);
  }

  public async updateClassroom(request: Request, response: Response): Promise<Response> {
    const updateClassroom = new UpdateClassroom();
    return updateClassroom.handle(request, response);
  }

  public async removeClassroom(request: Request, response: Response): Promise<Response> {
    const removeClassroom = new RemoveClassroom();
    return removeClassroom.handle(request, response);
  }
}
