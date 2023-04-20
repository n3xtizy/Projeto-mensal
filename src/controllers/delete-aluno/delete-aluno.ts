import { Aluno } from "../../models/aluno";
import { badRequest, ok, serverError } from "../helpers";
import { HttpRequest, HttpResponse, IController } from "../protocols";
import { IDeleteAlunoRepository } from "./protocols";

export class DeleteAlunoController implements IController {
  constructor(private readonly deleteAlunoRepository: IDeleteAlunoRepository) {}

  async handle(
    httpRequest: HttpRequest<any>
  ): Promise<HttpResponse<Aluno | string>> {
    try {
      const id = httpRequest?.params?.id;

      if (!id) {
        return badRequest("Missing aluno id");
      }

      const aluno = await this.deleteAlunoRepository.deleteAluno(id);

      return ok<Aluno>(aluno);
    } catch (error) {
      return serverError();
    }
  }
}
