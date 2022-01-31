// IMPORT MODULES under test here:
import { makeStatsString } from '../utils.js';

const test = QUnit.test;

test('should return a string describing the current state', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `You clicked on the head 4 times, on the middle 5 times, and on the bottom 2 times. And everybody loves your character's catchphrases:`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeStatsString(4, 5, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('should return a string describing the current state', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `You clicked on the head 1 times, on the middle 0 times, and on the bottom 2 times. And everybody loves your character's catchphrases:`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeStatsString(1, 0, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});