import { Aluno } from "../../models/aluno";

export interface CreateAlunoParams {
  name: string;
  age: string;
  address: string;
}

export interface ICreateAlunoRepository {
  createAluno(params: CreateAlunoParams): Promise<Aluno>;
}
