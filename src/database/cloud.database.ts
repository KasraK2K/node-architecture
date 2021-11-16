import { MongoClient } from "mongodb";

const uri = `mongodb+srv://${process.env.CLOUD_DB_USERNAME}:${process.env.CLOUD_DB_PASSWORD}@${process.env.CLOUD_DB_HOST}/`;
const client = new MongoClient(uri, { w: "majority" });

const CloudDB = (async () => {
  await client.connect();
  return client.db(process.env.CLOUD_DB_NAME, { retryWrites: true });
})();

export default CloudDB;
