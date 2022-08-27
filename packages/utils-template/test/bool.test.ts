const { isChineseCharacter } = require('../src/lib/bool')

it('中文', () => {
  expect(isChineseCharacter('中文')).toBeTruthy()
  expect(isChineseCharacter('is not ')).toBeFalsy()
})

export {}
