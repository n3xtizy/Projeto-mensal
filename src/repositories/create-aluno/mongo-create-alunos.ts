import {
  CreateAlunoParams,
  ICreateAlunoRepository,
} from "../../controllers/create-aluno/protocols";
import { MongoClient } from "../../database/mongo";
import { Aluno } from "../../models/aluno";
import { MongoAluno } from "../mongo-protocols";

export class MongoCreateAlunoRepository implements ICreateAlunoRepository {
  async createAluno(params: CreateAlunoParams): Promise<Aluno> {
    const { insertedId } = await MongoClient.db
      .collection("alunos")
      .insertOne(params);

    const aluno = await MongoClient.db
      .collection<MongoAluno>("alunos")
      .findOne({ _id: insertedId });

    if (!aluno) {
      throw new Error("Aluno not created");
    }

    const { _id, ...rest } = aluno;

    return { id: _id.toHexString(), ...rest };
  }
}
