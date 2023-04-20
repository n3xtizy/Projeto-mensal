import { Aluno } from "../../models/aluno";
import { badRequest, created, serverError } from "../helpers";
import { HttpRequest, HttpResponse, IController } from "../protocols";
import { CreateAlunoParams, ICreateAlunoRepository } from "./protocols";

export class CreateAlunoController implements IController {
  constructor(private readonly createAlunoRepository: ICreateAlunoRepository) {}

  async handle(
    httpRequest: HttpRequest<CreateAlunoParams>
  ): Promise<HttpResponse<Aluno | string>> {
    try {
      const requiredFields = ["name", "age", "address"];

      for (const field of requiredFields) {
        if (!httpRequest?.body?.[field as keyof CreateAlunoParams]?.length) {
          return badRequest(`Field ${field} is required`);
        }
      }

      const aluno = await this.createAlunoRepository.createAluno(
        httpRequest.body!
      );

      return created<Aluno>(aluno);
    } catch (error) {
      return serverError();
    }
  }
}
