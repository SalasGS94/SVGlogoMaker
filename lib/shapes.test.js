const { Triangle, Square, Circle } = require("./shapes.js");

describe("Testing for Triangle", () => {
  it("should be a red triangle", () => {
    const testShape = new Triangle();
    testShape.setColor("red");
    expect(testShape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="red" />`);
    });
});

describe("Testing for Square", () => {
  it("should be a blue square", () => {
    const testShape = new Square();
    testShape.setColor("blue");
    expect(testShape.render()).toEqual(`<rect width="100%" height="100%" fill="blue" />`);
    });
});

describe("Testing for Circle", () => {
  it("should be a green circle", () => {
    const testShape = new Circle();
    testShape.setColor("green");
    expect(testShape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="green" />`);
    });
});