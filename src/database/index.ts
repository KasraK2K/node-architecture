import CloudDB from "./cloud.database";
import LocalDB from "./local.database";

export const MainDatabase = process.env.MAIN_DATABASE === "local" ? LocalDB : CloudDB;
