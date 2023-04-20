import express from "express";
import { config } from "dotenv";
import { GetAlunosController } from "./controllers/get-alunos/get-alunos";
import { MongoGetAlunosRepository } from "./repositories/get-alunos/mongo-get-alunos";
import { MongoClient } from "./database/mongo";
import { MongoCreateAlunoRepository } from "./repositories/create-aluno/mongo-create-alunos";
import { CreateAlunoController } from "./controllers/create-aluno/create-aluno";
import { MongoUpdateAlunoRepository } from "./repositories/update-aluno/mongo-update-aluno";
import { UpdateAlunoController } from "./controllers/update-aluno/update-aluno";
import { MongoDeleteAlunoRepository } from "./repositories/delete-aluno/mongo-delete-aluno";
import { DeleteAlunoController } from "./controllers/delete-aluno/delete-aluno";

const main = async () => {
  config();

  const app = express();

  app.use(express.json());

  await MongoClient.connect();

  app.get("/alunos", async (req, res) => {
    const mongoGetAlunosRepository = new MongoGetAlunosRepository();

    const getAlunosController = new GetAlunosController(
      mongoGetAlunosRepository
    );

    const { body, statusCode } = await getAlunosController.handle();

    res.status(statusCode).send(body);
  });

  app.post("/alunos", async (req, res) => {
    const mongoCreateAlunoRepository = new MongoCreateAlunoRepository();

    const createAlunoController = new CreateAlunoController(
      mongoCreateAlunoRepository
    );

    const { body, statusCode } = await createAlunoController.handle({
      body: req.body,
    });

    res.status(statusCode).send(body);
  });

  app.patch("/alunos/:id", async (req, res) => {
    const mongoUpdateAlunoRepository = new MongoUpdateAlunoRepository();

    const updateAlunoController = new UpdateAlunoController(
      mongoUpdateAlunoRepository
    );

    const { body, statusCode } = await updateAlunoController.handle({
      body: req.body,
      params: req.params,
    });

    res.status(statusCode).send(body);
  });

  app.delete("/alunos/:id", async (req, res) => {
    const mongoDeleteAlunoRepository = new MongoDeleteAlunoRepository();

    const deleteAlunoController = new DeleteAlunoController(
      mongoDeleteAlunoRepository
    );

    const { body, statusCode } = await deleteAlunoController.handle({
      params: req.params,
    });

    res.status(statusCode).send(body);
  });

  const port = process.env.PORT || 8000;

  app.listen(port, () => console.log(`listening on port ${port}!`));
};

main();
