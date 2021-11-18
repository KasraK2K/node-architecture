import { ObjectID } from "bson";
import { JsonController, Get, Post, Params, Param } from "routing-controllers";
import LocalDB from "../../../databases/local.database";
import CatModel from "../../../models/cat/cat.model";
import CatBuilder from "../../../models/cat/classes/CatBuilder";

@JsonController("/cat")
export class CatController {
  @Get()
  async getAll() {
    return (await LocalDB).collection(CatModel.name).find().toArray();
  }

  @Get("/:catId")
  async getOne(@Param("catId") catId: string) {
    return (await LocalDB)
      .collection(CatModel.name)
      .findOne({ _id: new ObjectID(catId) });
  }

  @Post("/create")
  async create() {
    const newCat = new CatBuilder("Mimi").setColor("black").build();
    return (await LocalDB).collection(CatModel.name).insertOne(newCat);
  }
}
