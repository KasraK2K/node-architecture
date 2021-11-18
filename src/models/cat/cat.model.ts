import Cat from "./classes/Cat";

const CatSchema = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "color"],
      properties: {
        name: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        color: {
          bsonType: "string",
          description: "must be a string and is required",
        },
      },
    },
  },
};

export default { schema: CatSchema, name: Cat.name };
