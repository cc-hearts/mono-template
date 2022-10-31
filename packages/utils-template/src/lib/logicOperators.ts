/**
 * @author heart
 * @description 逻辑运算
 * @Date 2022-08-12
 */
function getDecimal(val: string | number) {
  const arg = String(val)
  const length = arg.split(',')[1]?.length || 0
  return [arg, length] as const
}

function removeDecimal(val: string): number {
  return Number(val.replace('.', ''))
}
/**
 * 乘法
 * @param {String | Number} arg1
 * @param {String | Number} arg2
 * @returns { Number }
 */
export function multiply(arg1: number | string, arg2: number | string): number {
  try {
    let m = 0
    const [arg1Fractional, arg1Length] = getDecimal(arg1)
    const [arg2Fractional, arg2Length] = getDecimal(arg2)
    m += arg1Length
    m += arg2Length
    return (removeDecimal(arg1Fractional) * removeDecimal(arg2Fractional)) / Math.pow(10, m)
  } catch (e) {
    return NaN
  }
}

/**
 * 加法
 * @param {String | Number} arg1
 * @param {String | Number} arg2
 * @returns { Number }
 */
export function addition(arg1: string | number, arg2: string | number): number {
  try {
    const [arg1Fractional, arg1Length] = getDecimal(arg1)
    const [arg2Fractional, arg2Length] = getDecimal(arg2)
    const expandedMultiplier = Math.pow(10, Math.max(arg1Length, arg2Length))
    return (multiply(arg1Fractional, expandedMultiplier) + multiply(arg2Fractional, expandedMultiplier)) / expandedMultiplier
  } catch (e) {
    return NaN
  }
}

/**
 * 减法
 * @param {String | Number} arg1
 * @param {String | Number} arg2
 * @returns { Number }
 */
export function subtraction(arg1: string | number, arg2: string | number): number {
  try {
    const [arg1Fractional, arg1Length] = getDecimal(arg1)
    const [arg2Fractional, arg2Length] = getDecimal(arg2)
    const expandedMultiplier = Math.pow(10, Math.max(arg1Length, arg2Length))
    return (multiply(arg1Fractional, expandedMultiplier) - multiply(arg2Fractional, expandedMultiplier)) / expandedMultiplier
  } catch (e) {
    return NaN
  }
}

/**
 * 除法
 * @param {String | Number} arg1
 * @param {String | Number} arg2
 * @returns { Number }
 */
export function division(arg1: string | number, arg2: string | number): number {
  try {
    const [arg1Fractional, arg1Length] = getDecimal(arg1)
    const [arg2Fractional, arg2Length] = getDecimal(arg2)
    const differenceMultiple = Math.pow(10, arg2Length - arg1Length)
    return multiply(removeDecimal(arg1Fractional) / removeDecimal(arg2Fractional), differenceMultiple)
  } catch (e) {
    return NaN
  }
}

/**
 * 取余数
 * @param {String | Number} arg1
 * @param {String | Number} arg2
 * @returns { Number }
 */
export function remainder(arg1: string | number, arg2: string | number): number {
  try {
    const [arg1Fractional, arg1Length] = getDecimal(arg1)
    const [arg2Fractional, arg2Length] = getDecimal(arg2)
    const expandedMultiplier = Math.pow(10, Math.max(arg1Length, arg2Length))

    return (multiply(arg1Fractional, expandedMultiplier) % multiply(arg2Fractional, expandedMultiplier)) / expandedMultiplier
  } catch (e) {
    return NaN
  }
}
