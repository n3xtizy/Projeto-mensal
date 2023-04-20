import { ObjectId } from "mongodb";

import {
  IUpdateAlunoRepository,
  UpdateAlunoParams,
} from "../../controllers/update-aluno/protocols";
import { MongoClient } from "../../database/mongo";
import { Aluno } from "../../models/aluno";
import { MongoAluno } from "../mongo-protocols";

export class MongoUpdateAlunoRepository implements IUpdateAlunoRepository {
  async updateAluno(id: string, params: UpdateAlunoParams): Promise<Aluno> {
    await MongoClient.db.collection("alunos").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...params,
        },
      }
    );

    const aluno = await MongoClient.db
      .collection<MongoAluno>("alunos")
      .findOne({ _id: new ObjectId(id) });

    if (!aluno) {
      throw new Error("Aluno not updated");
    }

    const { _id, ...rest } = aluno;

    return { id: _id.toHexString(), ...rest };
  }
}
