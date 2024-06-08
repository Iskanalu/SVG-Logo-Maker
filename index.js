import inquirer from 'inquirer';
import { SVG, registerWindow }  from '@svgdotjs/svg.js';
import { createSVGWindow } from 'svgdom';
import fs from 'fs';

// returns a window with a document and an svg root node
const window = createSVGWindow()
const document = window.document

// register window and document
// https://github.com/svgdotjs/svgdom
registerWindow(window, document);

async function promtUser() {
    const userInput = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the text;',
            validate: input => input.length <= 3,
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color (keyword or hexadecimal number):',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the shape of color (keyword or hexadecimal number):',
        },
    ]);

    return userInput;
}

function generateSVG({ text, textColor, shape, shapeColor }) {
    const svg = SVG(document.documentElement).size(300,200);

    //Draw shape
    if (shape === 'circle') {
        svg.circle(100).fill(shapeColor);
    } else if (shape === 'tringle') {
        svg.polygin('100,0 50,100 150,100').fill(shapeColor);
    } else if (shape === 'square') {
        svg.rect(100, 100).fill(shapeColor);
    }

    //Add text
    svg.text(text).fill(textColor).move(100 - text.length * 10, 100);

    return svg.svg();
}

async function main() {

    const userInput = await promtUser();
    const svgString = generateSVG(userInput);

    fs.writeFileSync('logo.svg', svgString);
    console.log('Generated logo.svg');
}

main();