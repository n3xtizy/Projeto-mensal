import { getRepository } from "typeorm";
import { Teacher } from "../database/entity/Teacher";
import { Request, Response } from "express";
import { TeacherRepository } from "../database/repositories/teacher.repository";

export const getTeacher = async (request: Request, response: Response) => {
  const { id } = request.params;
  try {
    const teachers = await TeacherRepository.findOneBy({ id: parseInt(id) });
    return response.json(teachers);
  } catch (error) {
    return response.status(500).json({ message: "Error" });
  }
};

export const saveTeacher = async (request: Request, response: Response) => {
  try {
    const teacher = await TeacherRepository.save(request.body);
    return response.json(teacher);
  } catch (error) {
    return response.status(500).json({ message: "Error" });
  }
};

 export const updateTeacher = async (request: Request, response: Response) => {
     const { id } = request.params

     try {
         const teacher = (await TeacherRepository.save({id: parseInt(id)}));
         

         return response.status(200).json({ message: 'Teacher Updated!' })
     } catch(error) {
         return response.status(500).json({ message: 'Error' })
     }

 };

 export const removeTeacher = async (request: Request, response: Response) => {
  const { id } = request.params

  try {
      const teacher = (await TeacherRepository.delete({id: parseInt(id)}));
      

      return response.status(200).json({ message: 'Teacher Deleted!' })
  } catch(error) {
      return response.status(500).json({ message: 'Error' })
  }
 };
