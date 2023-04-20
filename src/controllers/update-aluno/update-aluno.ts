import { Aluno } from "../../models/aluno";
import { badRequest, ok, serverError } from "../helpers";
import { HttpRequest, HttpResponse, IController } from "../protocols";
import { IUpdateAlunoRepository, UpdateAlunoParams } from "./protocols";

export class UpdateAlunoController implements IController {
  constructor(private readonly updateAlunoRepository: IUpdateAlunoRepository) {}

  async handle(
    httpRequest: HttpRequest<UpdateAlunoParams>
  ): Promise<HttpResponse<Aluno | string>> {
    try {
      const id = httpRequest?.params?.id;
      const body = httpRequest?.body;

      if (!body) {
        return badRequest("Missing fields.");
      }

      if (!id) {
        return badRequest("Missing aluno id");
      }

      const allowedFieldsToUpdate: (keyof UpdateAlunoParams)[] = [
        "name",
        "age",
        "address",
      ];

      const someFieldIsNotAllowedToUpdate = Object.keys(body).some(
        (key) => !allowedFieldsToUpdate.includes(key as keyof UpdateAlunoParams)
      );

      if (someFieldIsNotAllowedToUpdate) {
        return badRequest("Some received field is not allowed");
      }

      const aluno = await this.updateAlunoRepository.updateAluno(id, body);

      return ok<Aluno>(aluno);
    } catch (error) {
      return serverError();
    }
  }
}
