// Lesson 6 of 6

const thumbWar = require('../thumb-war')
const utilsMock = require('../utils')

jest.mock('../utils')

test('returns winner', () => {
  const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler')
  expect(winner).toBe('Kent C. Dodds')
  expect(utilsMock.getWinner.mock.calls).toEqual([ // where it lowkey calls __mocks__/utils.js
    ['Kent C. Dodds', 'Ken Wheeler'],
    ['Kent C. Dodds', 'Ken Wheeler']
  ])

  // cleanup
  utilsMock.getWinner.mockReset() // mockReset available as a jest.fn
})
