import {
  RoutingControllersOptions,
  useExpressServer,
} from "routing-controllers";
import * as express from "express";
import * as _ from "lodash";
import { join } from "path";
import { collectionList } from "./src/models";
import * as dotenv from "dotenv";
import { MainDatabase } from "./src/database";

class Bootstrap {
  private app: express.Application;
  private port: number;
  private routerConfig: RoutingControllersOptions;

  constructor() {
    this.app = express();
    this.port = +process.env.PORT || 3500;
    this.config();
    this.routes();
    this.database();
    this.start();
  }

  private async database() {
    MainDatabase.then(async (db) => {
      const createdCollections = await db.listCollections().toArray();

      collectionList.map(async (collection) => {
        const isCollectionRegistered = _.find(createdCollections, [
          "name",
          collection.name,
        ]);
        if (!isCollectionRegistered)
          await db.createCollection(collection.name, collection.schema);
      });
    });
  }

  private config(): void {
    dotenv.config();
  }

  private routes() {
    this.routerConfig = {
      routePrefix: "/api/v1",
      controllers: [join(__dirname, "/src/**/controllers/*{.js,.ts}")],
      middlewares: [join(__dirname, "/src/**/middlewares/*{.js,.ts}")],
      interceptors: [join(__dirname, "/src/**/interceptors/*{.js,.ts}")],
    };
    useExpressServer(this.app, this.routerConfig);
  }

  private start() {
    this.app.listen(this.port, () =>
      console.log(`Server listening port ${this.port}`)
    );
  }
}
new Bootstrap();
