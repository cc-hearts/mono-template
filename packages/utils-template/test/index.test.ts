const { remainder } = require('../src/lib/logicOperators')

it('1.5 % 0.2 === 0.1  1.5 % 3 === 1.5', () => {
  expect(remainder(1.5, 0.2)).toBe(0.1)
  expect(remainder(1.5, 3)).toBe(1.5)
})

export {}
