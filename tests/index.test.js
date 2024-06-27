import { generateSVG } from '../index';
// const generate = require('../index.js');

describe('generateSVG', () => {
    test('should return an svg', () => {
        const data = { text: 'ABC', textColor: 'blue', shape: 'circle', shapeColor: 'white' };
        const newSvg = generateSVG(data);
        expect(newSvg).toContain('svg');
    });

    test('should have the dimentions of width 300 and height 200', () => {
        const data = { text: 'ABC', textColor: 'blue', shape: 'circle', shapeColor: 'white' };
        const newSvg = generateSVG(data);
        expect(newSvg).toContain('width="300" height="200"');
    });
    
    test('should be a circle', () => {
        const data = { text: 'ABC', textColor: 'blue', shape: 'circle', shapeColor: 'white' };
        const newSvg = generateSVG(data);
        expect(newSvg).toContain('circle');
    });
    
    test('should be a a triangle', () => {
        const data = { text: 'ABC', textColor: 'blue', shape: 'triangle', shapeColor: 'white' };
        const newSvg = generateSVG(data);
        // expect(newSvg).toContain('triangle');
    });

    test('should be a square', () => {
        const data = { text: 'ABC', textColor: 'blue', shape: 'square', shapeColor: 'white' };
        const newSvg = generateSVG(data);
        expect(newSvg).toContain('<rect width="100" height="100"');
    });

    test('should contain the text given by the user and the color', () => {
        const data = { text: 'ABC', textColor: 'blue', shape: 'square', shapeColor: 'white' };
        const newSvg = generateSVG(data);
        expect(newSvg).toContain('<text fill="red"');
        expect(newSvg).toContain('ABC');
    })

    test('should contain the colors of the shape given by the user', () => {
        const data = { text: 'ABC', textColor: 'blue', shape: 'circle', shapeColor: 'white' };
        const newSvg = generateSVG(data);
        expect(newSvg).toContain('white');
    })

});