const Shapes = require("./shapes");

class Square extends Shapes {
  constructor(color) {
    super(color);
    this.shape = "square";
  }

  render() {
    return `<rect x="75" y="30" width="150" height="150" fill="${this.color.toLowerCase()}" />`;
  }
}

module.exports = Square;
