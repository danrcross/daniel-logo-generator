const fs = require("fs");
const inquirer = require("inquirer");
const Shapes = require("./shapes");
const Triangle = require("./triangle");
const Square = require("./square");
const Circle = require("./circle");

inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message:
        "What would you like to be printed on your logo? (Input THREE characters!)\n:",
      default: "LOL",
      filter: (input) => {
        return new Promise((resolve, reject) => {
          if (input.length <= 3) {
            resolve(input);
          } else {
            reject(new Error("Must be 3 characters or less!"));
          }
        });
      },
    },
    {
      type: "input",
      message:
        "What color would you like the text to be? (Response should be color name OR hexadecimal number)\n:",
      name: "textcolor",
    },
    {
      type: "list",
      message: "Which shape would you like your icon to be?\n:",
      name: "shape",
      choices: ["Triangle", "Circle", "Square"],
    },
    {
      type: "input",
      message: "What color would you like your icon to be?\n:",
      name: "shapecolor",
    },
  ])
  .then((response) => {
    const { text, textcolor, shape, shapecolor } = response;
    const filePath = `../examples/logo.svg`;
    let myShape;
    if (shape === "Triangle") {
      myShape = new Triangle(shapecolor);
    } else if (shape === "Square") {
      myShape = new Square(shapecolor);
    } else if (shape === "Circle") {
      myShape = new Circle(shapecolor);
    }
    const myLogo = new Shapes(shapecolor, text, myShape.render(), textcolor);
    const svgData = myLogo.render();
    // console.log()
    fs.writeFile(filePath, svgData, (error) => {
      if (error) {
        console.error("Error writing file:", err);
        return;
      }
      console.log("Check your examples folder for the new file!");
    });
  });
