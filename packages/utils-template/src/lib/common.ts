import { prototypeToString } from './bool'

/**
 * noop
 */
export const noop = () => {
  /** noop */
}

export function clearObjectValue(
  obj: Record<string, unknown>
): Record<string, unknown> {
  const values = Object.assign({}, obj)
  Object.keys(values).forEach((key: keyof typeof obj) => {
    switch (prototypeToString(values[key])) {
      case '[object String]': {
        values[key] = ''
        break
      }
      case '[object Number]': {
        values[key] = 0
        break
      }
      case '[object Boolean]': {
        values[key] = false
        break
      }
      case '[object Promise]': {
        // TODO：
        break
      }
      case '[object Set]': {
        Reflect.apply((values[key] as Set<unknown>).clear, null, [])
        break
      }
      case '[object Map]': {
        Reflect.apply(
          (values[key] as Map<PropertyKey, unknown>).clear,
          null,
          []
        )
        break
      }
      case '[object BigInt]': {
        values[key] = 0n
        break
      }
      case '[object Array]': {
        ;(values[key] as unknown[]).length = 0
        break
      }
    }
  })
  return values
}

module.exports = {
  clearObjectValue,
}
