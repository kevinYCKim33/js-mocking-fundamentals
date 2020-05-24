// Lesson 4 of 6

const thumbWar = require('../thumb-war')
const utils = require('../utils')

test('returns winner', () => {
  jest.spyOn(utils, 'getWinner') // no cleanup this way?
  utils.getWinner.mockImplementation((p1, p2) => p1)

  const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler')
  expect(winner).toBe('Kent C. Dodds')
  
  // because Kent wins both times in the mock...this will be called twice
  expect(utils.getWinner.mock.calls).toEqual([
    ['Kent C. Dodds', 'Ken Wheeler'],
    ['Kent C. Dodds', 'Ken Wheeler']
  ])

  // cleanup
  utils.getWinner.mockRestore() // but you clean up right here anyways...
})
