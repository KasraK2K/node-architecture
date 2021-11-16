import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

const CatDB = (async () => {
  await client.connect();
  return client.db("CatDB");
})();

export default CatDB;
