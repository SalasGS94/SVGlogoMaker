const inquirer = require('inquirer');
const fs = require ("fs");
const {Triangle, Square, Circle} = require ('./lib/shapes')

function specifyPrompt(){
inquirer
  .prompt([
    {
      type: 'input',
      name: 'logo_text',
      message: 'What title would you like to give to your logo? (It must be no more than 3 characters)',
    },
    {
      type: 'input',
      name: 'text_color',
      message: 'What color should the text have?',
    },
    {
      type: 'list',
      name: 'logo_shape',
      message: 'Please pick a shape for the logo',
      choices: ['Triangle', 'Square', 'Circle'],
    },
    {
      type: 'input',
      name: 'shape_color',
      message: 'What color should the logos shape have?',
    }
  ])
  .then((details) => {
    if (details.logo_text.length > 3) {
      console.log("The text of the logo must be no longer than 3 characters");
      specifyPrompt();
    } else {
      svgCreator("logo.svg", details);
    }
  });
}

function svgCreator(fileName, details) {
  let svgContent = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
  svgContent += `${details.logo_shape}`;

  let selected_shape;
  if (details.logo_shape === "Triangle") {
    selected_shape = new Triangle();
    svgContent += `<polygon points="150, 18 244, 182 56, 182" fill="${details.shape_color}"/>`;
  } else if (details.logo_shape === "Square") {
    selected_shape = new Square();
    svgContent += `<rect x="73" y="40" width="160" height="160" fill="${details.shape_color}"/>`;
  } else {
    selected_shape = new Circle();
    svgContent += `<circle cx="150" cy="115" r="80" fill="${details.shape_color}"/>`;
  }

  svgContent += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${details.text_color}">${details.logo_text}</text></svg>`;

  fs.writeFile(fileName, svgContent, (error) => {
    error ? console.log(error) : console.log("Logo svg file created succesfully!!");
  });
}

specifyPrompt ()