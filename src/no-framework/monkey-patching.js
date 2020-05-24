// Lesson 2 of 5 (1 is just intro vid)

// monkey-patching: the moise naive approach
// override an object's properties in the test.


const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

const originalGetWinner = utils.getWinner
utils.getWinner = (p1, p2) => p1 // all functions are objects in JS
// not overriding const utils...just giving it extra abilities

const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler')
assert.strictEqual(winner, 'Kent C. Dodds')

// cleanup
utils.getWinner = originalGetWinner // return utils.getWinner to what it originally is
