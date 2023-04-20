import { IGetAlunosRepository } from "../../controllers/get-alunos/protocols";
import { MongoClient } from "../../database/mongo";
import { Aluno } from "../../models/aluno";
import { MongoAluno } from "../mongo-protocols";

export class MongoGetAlunosRepository implements IGetAlunosRepository {
  async getAlunos(): Promise<Aluno[]> {
    const alunos = await MongoClient.db
      .collection<MongoAluno>("alunos")
      .find({})
      .toArray();

    return alunos.map(({ _id, ...rest }) => ({
      ...rest,
      id: _id.toHexString(),
    }));
  }
}
