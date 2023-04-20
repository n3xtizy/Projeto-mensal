import { ObjectId } from "mongodb";

import { IDeleteAlunoRepository } from "../../controllers/delete-aluno/protocols";
import { MongoClient } from "../../database/mongo";
import { Aluno } from "../../models/aluno";
import { MongoAluno } from "../mongo-protocols";

export class MongoDeleteAlunoRepository implements IDeleteAlunoRepository {
  async deleteAluno(id: string): Promise<Aluno> {
    const aluno = await MongoClient.db
      .collection<MongoAluno>("alunos")
      .findOne({ _id: new ObjectId(id) });

    if (!aluno) {
      throw new Error("Aluno not found");
    }

    const { deletedCount } = await MongoClient.db
      .collection("alunos")
      .deleteOne({ _id: new ObjectId(id) });

    if (!deletedCount) {
      throw new Error("Aluno not deleted");
    }

    const { _id, ...rest } = aluno;

    return { id: _id.toHexString(), ...rest };
  }
}
