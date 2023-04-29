import "reflect-metadata";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import routes from "./routes";
import { AppDataSource } from "../data-source";

AppDataSource.initialize()
  .then(() => {
    const app = express();
    app.use(cors());
    app.use(bodyParser.json());
    app.use(routes);

    return app.listen('8080', () => {
      console.log(`Servidor na porta: ${'8080'}`);
    });
  })
  .catch((e) => {
    console.log("Erro ao conectar ao banco de dados", e?.message);
  });
