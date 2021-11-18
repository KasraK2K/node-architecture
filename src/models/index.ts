import { ICollectionModel } from "../interfaces/database.interface";
import CatModel from "./cat/cat.model";

export const collectionList: ICollectionModel[] = [
  { name: CatModel.name, schema: CatModel.schema },
];