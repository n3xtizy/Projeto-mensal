import { Router } from 'express';
import { ClassroomController } from '../controller/ClassroomControllers/classromController';



const classroomRouter = Router();
const classroomController = new ClassroomController();

classroomRouter.get('/', classroomController.getClassroom);
classroomRouter.post('/', classroomController.saveClassroom);
classroomRouter.put('/:id', classroomController.updateClassroom);
classroomRouter.delete('/:id', classroomController.removeClassroom);

export default classroomRouter;
