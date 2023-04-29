import { Router } from 'express';
import { StudentController } from '../controller/StudentControllers/studentController';


const studentRouter = Router();
const studentController = new StudentController();

studentRouter.get('/', studentController.getStudent);
studentRouter.post('/', studentController.saveStudent);
studentRouter.put('/:id', studentController.updateStudent);
studentRouter.delete('/:id', studentController.removeStudent);

export default studentRouter;
