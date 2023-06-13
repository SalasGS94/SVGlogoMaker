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
      choices: ['triangle', 'square', 'circle'],
    },
    {
      type: 'input',
      name: 'shape_color',
      message: 'What color should the logos shape have?',
    }
  ])
  .then((details) => {
    // let shape;
    // shape = new Triangle ()
    // shape.setColor(data.shape_color)
    // console.log(shape)
    // fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
    //   err ? console.log(err) : console.log('Success!')
    // );
    if (details.logo_text.length > 3) {
      console.log("The text of the logo must be no longer than 3 characters");
      specifyPrompt();
    } else {
      // Calling write file function to generate SVG file
      // writeToFile("logo.svg", answers); !!!
      console.log(details)
    }
  });
}

specifyPrompt ()

// Class SVG that brings it all together
// Method to get text in the text setColor
// In the SVG class you are going to call a render method 