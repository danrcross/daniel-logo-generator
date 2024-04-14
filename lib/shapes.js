class Shapes {
  constructor(color, text, shapeEl, textCol) {
    this.color = color;
    this.text = text;
    this.shapeEl = shapeEl;
    this.textCol = textCol;
  }

  setColor(color) {
    if (color) {
      this.color = color;
    }
  }

  render() {
    console.log("I am a shape");
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">    

                ${this.shapeEl}

                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textCol.toLowerCase()}">${
      this.text
    }</text>

             </svg>`;
  }
}

module.exports = Shapes;
