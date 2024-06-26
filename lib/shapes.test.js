const Triangle = require("./triangle");
const Circle = require("./circle");
const Square = require("./square");

// All 3 of these tests will make sure that the .setColor() method of the parent class can be called on an instance of each child class,
// and successfully set the color that is defined in the.svg element generated by the.render() method of each child class.
describe("Triangle", () => {
  it("Should change the line of svg syntax to include the color that is passed to the .setColor() method", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    );
  });
});

describe("Circle", () => {
  it("Should change the line of svg syntax to include the color that is passed to the .setColor() method", () => {
    const shape = new Circle();
    shape.setColor("red");
    expect(shape.render()).toEqual(
      '<circle cx="150" cy="100" r="80" fill="red" />'
    );
  });
});

describe("Square", () => {
  it("Should change the line of svg syntax to include the color that is passed to the .setColor() method", () => {
    const shape = new Square();
    shape.setColor("green");
    expect(shape.render()).toEqual(
      '<rect x="75" y="30" width="150" height="150" fill="green" />'
    );
  });
});
