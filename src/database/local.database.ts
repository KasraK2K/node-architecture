import { MongoClient } from "mongodb";
import { ICollectionModel } from "../interfaces/database.interface";
import { collectionList } from "../models";
import * as _ from "lodash";

const LocalDB = (async () => {
  try {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);
    await client.connect();
    const database = client.db("LocalDB");
    
    const createdCollections = await database.listCollections().toArray();
    collectionList.map(async (collection) => {
      const isCollectionRegistered = _.find(createdCollections, [
        "name",
        collection.name,
      ]);
      if (!isCollectionRegistered)
        await database.createCollection(collection.name, collection.schema);
    });

    return database;
  } catch {
    console.info("LocalDB is not connected");
  }
})();

export default LocalDB;