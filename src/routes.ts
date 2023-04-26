import { Router, Request, Response } from 'express'

import { getStudent, removeStudent, saveStudent, updateStudent } from './controller/StudentController'
import { getClassroom, saveClassroom, updateClassroom, removeClassroom } from './controller/ClassroomController'
import { getCourse, removeCourse, saveCourse, updateCourse } from './controller/CourseController'
import { getTeacher, updateTeacher, removeTeacher, saveTeacher } from './controller/TeacherController'

const routes = Router()

routes.get('/students', getStudent)
routes.post('/students', saveStudent)
 routes.get('/student/:id', getStudent)
 routes.put('/student/:id', updateStudent)
 routes.delete('/student/:id', removeStudent)

 routes.get('/classrooms', getClassroom)
 routes.post('/classrooms', saveClassroom)
 routes.get('/classroom/:id', getClassroom)
 routes.put('/classroom/:id', updateClassroom)
 routes.delete('/classroom/:id', removeClassroom)


 routes.get('/courses', getCourse)
routes.post('/courses', saveCourse)
 routes.get('/course/:id', getCourse)
 routes.put('/course/:id', updateCourse)
 routes.delete('/course/:id', removeCourse)


 routes.get('/teachers', getTeacher)
routes.post('/teachers', saveTeacher)
 routes.get('/teacher/:id', getTeacher)
 routes.put('/teacher/:id', updateTeacher)
 routes.delete('/teacher/:id', removeTeacher)


export default routes