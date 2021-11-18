import { JsonController, Get } from "routing-controllers";
import LocalDB from "../../../databases/local.database";
import CatModel from "../../../models/cat/cat.model";
import CatBuilder from "../../../models/cat/classes/CatBuilder";

@JsonController()
export class HomeController {
  @Get()
  async get() {
    return (await LocalDB)
      .collection(CatModel.name)
      .insertOne(new CatBuilder("Mimi").setColor("black").build());
  }
}
