const Shapes = require("./shapes");

class Circle extends Shapes {
  constructor(color) {
    super(color);
    this.shape = "circle";
  }

  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color.toLowerCase()}" />`;
  }
}

module.exports = Circle;
