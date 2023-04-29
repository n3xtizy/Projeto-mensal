import { Router } from 'express';
import { CourseController } from '../controller/CourseControllers/courseController';


const courseRouter = Router();
const courseController = new CourseController();

courseRouter.get('/', courseController.getCourse);
courseRouter.post('/', courseController.saveCourse);
courseRouter.put('/:id', courseController.updateCourse);
courseRouter.delete('/:id', courseController.removeCourse);

export default courseRouter;
