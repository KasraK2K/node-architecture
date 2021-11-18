import { MongoClientOptions, DbOptions } from "mongodb";
import { DatabaseNamesEnum } from "../enums/database.enum";
import { mongoDbMaker } from "./databaseMaker";

const CloudDB = (async () => {
  const databaseURL = `mongodb+srv://${process.env.CLOUD_DB_USERNAME}:${process.env.CLOUD_DB_PASSWORD}@${process.env.CLOUD_DB_HOST}/`;
  const databaseName = DatabaseNamesEnum.CLOUD_DB;
  const databaseOptions: DbOptions = { retryWrites: true };
  const clientOptions: MongoClientOptions = { w: "majority" };

  return await mongoDbMaker(
    databaseURL,
    databaseName,
    databaseOptions,
    clientOptions
  );
})();

export default CloudDB;
