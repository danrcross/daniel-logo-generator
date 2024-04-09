const Shapes = require("./shapes");

describe("Shapes", () => {
  it("Should change the line of svg syntax to include the color that is passed to the .setColor() method", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    );
  });
});
