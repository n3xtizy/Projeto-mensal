import { Router } from 'express';
import { TeacherController } from '../controller/TeacherControllers/teacherController';


const teacherRouter = Router();
const teacherController = new TeacherController();

teacherRouter.get('/', teacherController.getTeacher);
teacherRouter.post('/', teacherController.saveTeacher);
teacherRouter.put('/:id', teacherController.updateTeacher);
teacherRouter.delete('/:id', teacherController.removeTeacher);

export default teacherRouter;
