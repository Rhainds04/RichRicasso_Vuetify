export default class Produit {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.price = data.price;
    this.image = data.image;
    this.size = data.size;
    this.color = data.color;
  }
}
