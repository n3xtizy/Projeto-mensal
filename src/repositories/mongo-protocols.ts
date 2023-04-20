import { Aluno } from "../models/aluno";

export type MongoAluno = Omit<Aluno, "id">;
