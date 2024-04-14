const Shapes = require("./shapes");

class Triangle extends Shapes {
  constructor(color) {
    super(color);
    this.shape = "triangle";
  }

  render() {
    return `<polygon points="150, 0 274, 150 20, 150" fill="${this.color.toLowerCase()}" />`;
  }
}

module.exports = Triangle;
