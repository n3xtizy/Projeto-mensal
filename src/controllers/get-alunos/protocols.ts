import { Aluno } from "../../models/aluno";

export interface IGetAlunosRepository {
  getAlunos(): Promise<Aluno[]>;
}
