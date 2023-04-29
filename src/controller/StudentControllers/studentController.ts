import { Request, Response } from 'express';
import { GetStudent } from './getStudent';
import { SaveStudent } from './saveStudent';
import { UpdateStudent } from './updateStudent';
import { RemoveStudent } from './removeStudent';

export class StudentController {

  public async getStudent(request: Request, response: Response): Promise<Response> {
    const getStudent = new GetStudent();
    return getStudent.handle(request, response);
  }

  public async saveStudent(request: Request, response: Response): Promise<Response> {
    const saveStudent = new SaveStudent();
    return saveStudent.handle(request, response);
  }

  public async updateStudent(request: Request, response: Response): Promise<Response> {
    const updateStudent = new UpdateStudent();
    return updateStudent.handle(request, response);
  }

  public async removeStudent(request: Request, response: Response): Promise<Response> {
    const removeStudent = new RemoveStudent();
    return removeStudent.handle(request, response);
  }
}
