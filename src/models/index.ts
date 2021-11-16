import { ICollectionModel } from "../interfaces/database.interface";
import CatModel from "./CatModel";

export const collectionList: ICollectionModel[] = [
  { name: CatModel.name, schema: CatModel.schema },
];