/**
 * noop
 */
export const noop = () => {
  /** noop */
}

export function clearObjectValue(
  obj: Record<string, unknown>
): Record<string, unknown> {
  const tempObj = Object.assign({}, obj)
  Object.keys(tempObj).forEach((key: keyof typeof obj) => {
    switch (typeof tempObj[key]) {
      case 'string': {
        tempObj[key] = ''
        break
      }
      case 'number': {
        tempObj[key] = 0
        break
      }
      case 'boolean': {
        tempObj[key] = false
      }
    }
  })
  return tempObj
}

module.exports = {
  clearObjectValue,
}
