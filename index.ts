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

    return app.listen(process.env.APP_PORT, () => {
      console.log(`Servidor na porta: ${process.env.APP_PORT}`);
    });
  })
  .catch((e) => {
    console.log("Erro ao conectar ao banco de dados", e?.message);
  });
