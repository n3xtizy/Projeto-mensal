import { Request, Response } from "express";
import { FindTeacherByNameDto } from "../dtos/findTeacherByName.dto";
import { FindTeacherByName } from "../service/FindTeacherByNameService";

export class FindTeacherByNameController {

    public static async getTeacherByName(request: Request, response: Response): Promise<void> {
        const dto = new FindTeacherByNameDto();
        dto.name = request.params.name;
        const findTeacher = new FindTeacherByName();

        try {
            const teachers = await findTeacher.findTeachersByName(dto);

            if (teachers.length > 0) {
                response.json(teachers);
            } else {
                response.status(404).json({ error: 'Teacher not found' });
            }
        } catch (err) {
            response.status(500).json({ error: 'Internal server error' });
        }
    }
}