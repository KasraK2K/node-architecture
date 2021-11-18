import * as _ from "lodash";
import { DatabaseNamesEnum } from "../enums/database.enum";
import { mongoDbMaker } from "./databaseMaker";

const LocalDB = (async () => {
  const databaseURL = "mongodb://localhost:27017";
  const databaseName = DatabaseNamesEnum.LOCAL_DB;

  return await mongoDbMaker(databaseURL, databaseName);
})();

export default LocalDB;
