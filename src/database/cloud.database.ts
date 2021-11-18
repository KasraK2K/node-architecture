import { MongoClient } from "mongodb";
import { ICollectionModel } from "../interfaces/database.interface";
import { collectionList } from "../models";
import * as _ from "lodash";

const CloudDB = (async () => {
  try {
    const uri = `mongodb+srv://${process.env.CLOUD_DB_USERNAME}:${process.env.CLOUD_DB_PASSWORD}@${process.env.CLOUD_DB_HOST}/`;
    const client = new MongoClient(uri, { w: "majority" });
    await client.connect();
    const database = client.db(process.env.CLOUD_DB_NAME, {
      retryWrites: true,
    });
    
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
    console.info("CloudDB is not connected");
  }
})();

export default CloudDB;
