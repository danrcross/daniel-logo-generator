class Shapes {
  constructor(color) {
    this.color = color;
  }

  setColor() {
    const myColor = this.color;
    console.log(myColor);
  }

  render() {
    console.log("I am a shape");
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">    

                ${shapeColor}

                ${text}

             </svg>`;
  }
}

module.exports = Shapes;
