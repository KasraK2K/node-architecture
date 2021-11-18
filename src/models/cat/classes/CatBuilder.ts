import Cat from "./Cat";

class CatBuilder {
  cat: Cat;

  constructor(name: string) {
    this.cat = new Cat(name);
  }

  setColor(color: string) {
    this.cat.color = color;
    return this;
  }

  build() {
    return this.cat;
  }
}

export default CatBuilder;