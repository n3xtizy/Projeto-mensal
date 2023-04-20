import { Aluno } from "../../models/aluno";
import { ok, serverError } from "../helpers";
import { HttpResponse, IController } from "../protocols";
import { IGetAlunosRepository } from "./protocols";

export class GetAlunosController implements IController {
  constructor(private readonly getAlunosRepository: IGetAlunosRepository) {}

  async handle(): Promise<HttpResponse<Aluno[] | string>> {
    try {
      const alunos = await this.getAlunosRepository.getAlunos();

      return ok<Aluno[]>(alunos);
    } catch (error) {
      return serverError();
    }
  }
}
