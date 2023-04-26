import { getRepository } from "typeorm";
import { Student } from "../database/entity/Student";
import { Request, Response } from "express";
import { StudentRepository } from "../database/repositories/student.repository";

export const getStudent = async (request: Request, response: Response) => {
  const { id } = request.params;
  try {
    const students = await StudentRepository.findOneBy({ id: parseInt(id) });
    return response.json(students);
  } catch (error) {
    return response.status(500).json({ message: "Error" });
  }
};

export const saveStudent = async (request: Request, response: Response) => {
  try {
    const student = await StudentRepository.save(request.body);
    return response.json(student);
  } catch (error) {
    return response.status(500).json({ message: "Error" });
  }
};

 export const updateStudent = async (request: Request, response: Response) => {
     const { id } = request.params

     try {
         const student = (await StudentRepository.save({id: parseInt(id)}));
         

         return response.status(200).json({ message: 'Student Updated!' })
     } catch(error) {
         return response.status(500).json({ message: 'Error' })
     }

 };

 export const removeStudent = async (request: Request, response: Response) => {
  const { id } = request.params

  try {
      const student = (await StudentRepository.delete({id: parseInt(id)}));
      

      return response.status(200).json({ message: 'Student Deleted!' })
  } catch(error) {
      return response.status(500).json({ message: 'Error' })
  }
 };
