import { getRepository } from "typeorm";
import { Course } from "../database/entity/Course";
import { Request, Response } from "express";
import { CourseRepository } from "../database/repositories/course.repository";

export const getCourse = async (request: Request, response: Response) => {
  const { id } = request.params;
  try {
    const courses = await CourseRepository.findOneBy({ id: parseInt(id) });
    return response.json(courses);
  } catch (error) {
    return response.status(500).json({ message: "Error" });
  }
};

export const saveCourse = async (request: Request, response: Response) => {
  try {
    const course = await CourseRepository.save(request.body);
    return response.json(course);
  } catch (error) {
    return response.status(500).json({ message: "Error" });
  }
};

 export const updateCourse = async (request: Request, response: Response) => {
     const { id } = request.params

     try {
         const course = (await CourseRepository.save({id: parseInt(id)}));
         

         return response.status(200).json({ message: 'Course Updated!' })
     } catch(error) {
         return response.status(500).json({ message: 'Error' })
     }

 };

 export const removeCourse = async (request: Request, response: Response) => {
  const { id } = request.params

  try {
      const course = (await CourseRepository.delete({id: parseInt(id)}));
      

      return response.status(200).json({ message: 'Course Deleted!' })
  } catch(error) {
      return response.status(500).json({ message: 'Error' })
  }
 };
