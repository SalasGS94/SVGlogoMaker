const inquirer = require('inquirer');
const {Triangle, Square, Circle} = require ('./lib/shapes')

function myFunction(){
inquirer
  .prompt([
    {
      type: 'input',
      name: 'shape_color',
      message: 'What shape color do you want?',
    },
    // {
    //   type: 'checkbox',
    //   message: 'What languages do you know?',
    //   name: 'stack',
    //   choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    // },
    // {
    //   type: 'list',
    //   message: 'What is your preferred method of communication?',
    //   name: 'contact',
    //   choices: ['email', 'phone', 'telekinesis'],
    // },
  ])
  .then((data) => {
    console.log(data)
    let shape;
    shape = new Triangle ()
    shape.setColor(data.shape_color)
    console.log(shape)
    // fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
    //   err ? console.log(err) : console.log('Success!')
    // );
  });
}

myFunction ()

// Class SVG that brings it all together
// Method to get text in the text setColor
// In the SVG class you are going to call a render method 