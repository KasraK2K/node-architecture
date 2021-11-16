import { JsonController, Get } from "routing-controllers";
import LocalDB from "../../database/local.database";
import CatModel from "../../models/CatModel";

@JsonController()
export class HomeController {
  @Get()
  async get() {
    const result = (await LocalDB).collection(CatModel.name).insertOne({
      name: "Bani",
      color: "Black",
    });
    return result;
  }
}
