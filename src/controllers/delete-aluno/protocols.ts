import { Aluno } from "../../models/aluno";

export interface IDeleteAlunoRepository {
  deleteAluno(id: string): Promise<Aluno>;
}
