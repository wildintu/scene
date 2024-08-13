const sum = require('../sum');

describe('Sum Test', () => {
  test('adds 1+ 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
  })
})
