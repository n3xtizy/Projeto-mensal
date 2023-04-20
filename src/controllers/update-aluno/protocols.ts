import { Aluno } from "../../models/aluno";

export interface UpdateAlunoParams {
  name?: string;
  age?: string;
  address?: string;
}

export interface IUpdateAlunoRepository {
  updateAluno(id: string, params: UpdateAlunoParams): Promise<Aluno>;
}
