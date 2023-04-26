import { getRepository } from "typeorm";
import { Classroom } from "../database/entity/Classroom";
import { Request, Response } from "express";
import { ClassroomRepository } from "../database/repositories/classroom.repository";

export const getClassroom = async (request: Request, response: Response) => {
  const { id } = request.params;
  try {
    const classrooms = await ClassroomRepository.findOneBy({ id: parseInt(id) });
    return response.json(classrooms);
  } catch (error) {
    return response.status(500).json({ message: "Error" });
  }
};

export const saveClassroom = async (request: Request, response: Response) => {
  try {
    const classroom = await ClassroomRepository.save(request.body);
    return response.json(classroom);
  } catch (error) {
    return response.status(500).json({ message: "Error" });
  }
};

 export const updateClassroom = async (request: Request, response: Response) => {
     const { id } = request.params

     try {
         const classroom = (await ClassroomRepository.save({id: parseInt(id)}));
         

         return response.status(200).json({ message: 'Classroom Updated!' })
     } catch(error) {
         return response.status(500).json({ message: 'Error' })
     }

 };

 export const removeClassroom = async (request: Request, response: Response) => {
  const { id } = request.params

  try {
      const classroom = (await ClassroomRepository.delete({id: parseInt(id)}));
      

      return response.status(200).json({ message: 'Classroom Deleted!' })
  } catch(error) {
      return response.status(500).json({ message: 'Error' })
  }
 };
