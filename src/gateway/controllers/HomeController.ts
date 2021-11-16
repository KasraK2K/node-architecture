import { JsonController, Get } from "routing-controllers";
import CatDB from "../../database/cat.database";
import CatModel from "../../models/CatModel";

@JsonController()
export class HomeController {
  @Get()
  async get() {
    const result = (await CatDB).collection(CatModel.name).insertOne({
      name: "Bani",
      color: "Black",
    });
    return result;
  }
}
