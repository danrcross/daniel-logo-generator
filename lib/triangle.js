const Shapes = require("./shapes");

class Triangle extends Shapes {
  constructor(color) {
    super(color);
    this.shape = "triangle";
  }

  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

const newTri = new Triangle("blue");
console.log(newTri);
newTri.setColor();
console.log(newTri.render());
