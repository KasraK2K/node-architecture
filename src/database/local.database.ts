import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

const LocalDB = (async () => {
  await client.connect();
  return client.db("LocalDB");
})();

export default LocalDB;