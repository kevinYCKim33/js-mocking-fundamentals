// Lesson 3 of 6

const thumbWar = require('../thumb-war')
const utils = require('../utils')

test('returns winner', () => {
  const originalGetWinner = utils.getWinner
  utils.getWinner = jest.fn((p1, p2) => p1)

  const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler')
  expect(winner).toBe('Kent C. Dodds')
  expect(utils.getWinner.mock.calls).toEqual([
    ['Kent C. Dodds', 'Ken Wheeler'],
    ['Kent C. Dodds', 'Ken Wheeler']
  ])
  // could also do these assertions:
  expect(utils.getWinner).toHaveBeenCalledTimes(2) // Thumbwar is Best 2 out of 3; in mock, Kent will always win twice
  
  // the first time we expect it to be called with this
  expect(utils.getWinner).toHaveBeenNthCalledWith(
    1,
    'Kent C. Dodds',
    'Ken Wheeler'
  )

  // second time we expect it to be called with this again
  expect(utils.getWinner).toHaveBeenNthCalledWith(
    2,
    'Kent C. Dodds',
    'Ken Wheeler'
  )

  // cleanup
  utils.getWinner = originalGetWinner
})
