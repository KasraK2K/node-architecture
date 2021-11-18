import { Db, DbOptions, MongoClient, MongoClientOptions } from "mongodb";
import * as _ from "lodash";
import { collectionList } from "../models";
import { ICollectionModel } from "../interfaces/database.interface";

export const mongoDbMaker = async (
  databaseURL: string,
  databaseName: string,
  databaseOptions?: DbOptions,
  clientOptions?: MongoClientOptions
) => {
  try {
    const client: MongoClient = new MongoClient(databaseURL, clientOptions);
    await client.connect();
    const database: Db = client.db(databaseName, databaseOptions);

    const createdCollections = await database.listCollections().toArray();
    collectionList.map(async (collection: ICollectionModel) => {
      const isCollectionRegistered = _.find(createdCollections, [
        "name",
        collection.name,
      ]);
      if (!isCollectionRegistered)
        await database.createCollection(collection.name, collection.schema);
    });

    return database;
  } catch {
    console.info(`${databaseName} is not connected`);
  }
};
