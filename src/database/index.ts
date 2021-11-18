import { Db } from "mongodb";
import CloudDB from "./cloud.database";
import LocalDB from "./local.database";

const mapDatabase = new Map<string, Promise<Db>>([
  ["cloud", CloudDB],
  ["local", LocalDB],
]);

export const MainDatabase = mapDatabase.get(process.env.MAIN_DATABASE);
