/**
 * @author heart
 * @description 逻辑运算
 * @Date 2022-08-12
 */

/**
 * 乘法
 * @param {*} arg1
 * @param {*} arg2
 * @returns
 */
export function multiply(arg1: number | string, arg2: number | string) {
  let m = 0
  try {
    const arg1Fractional = String(arg1).split('.')[1]
    const arg2Fractional = String(arg2).split('.')[1]
    m += (arg1Fractional && arg1Fractional.length) || 0
    m += (arg2Fractional && arg2Fractional.length) || 0
  } catch (e) {
    return NaN
  }
  return (
    (Number(String(arg1).replace('.', '')) *
      Number(String(arg2).replace('.', ''))) /
    Math.pow(10, m)
  )
}

/**
 * 加法
 * @param {*} arg1
 * @param {*} arg2
 * @returns
 */
export function addition(arg1: string | number, arg2: string | number) {
  try {
    const arg1Fractional = String(arg1).split('.')[1]
    const arg2Fractional = String(arg2).split('.')[1]
    const arg1Length = (arg1Fractional && arg1Fractional.length) || 0
    const arg2Length = (arg2Fractional && arg2Fractional.length) || 0
    const expandedMultiplier = Math.pow(10, Math.max(arg1Length, arg2Length))
    return (
      (multiply(arg1, expandedMultiplier) +
        multiply(arg2, expandedMultiplier)) /
      expandedMultiplier
    )
  } catch (e) {
    return NaN
  }
}

/**
 * 减法
 * @param arg1
 * @param arg2
 * @returns
 */
export function subtraction(arg1: string | number, arg2: string | number) {
  try {
    const arg1Fractional = String(arg1).split('.')[1]
    const arg2Fractional = String(arg2).split('.')[1]
    const arg1Length = (arg1Fractional && arg1Fractional.length) || 0
    const arg2Length = (arg2Fractional && arg2Fractional.length) || 0
    const expandedMultiplier = Math.pow(10, Math.max(arg1Length, arg2Length))
    return (
      (multiply(arg1, expandedMultiplier) -
        multiply(arg2, expandedMultiplier)) /
      expandedMultiplier
    )
  } catch (e) {
    return NaN
  }
}

/**
 * 除法
 * @param arg1
 * @param arg2
 * @returns
 */
export function division(arg1: string | number, arg2: string | number) {
  try {
    const arg1Fractional = String(arg1).split('.')[1]
    const arg2Fractional = String(arg2).split('.')[1]
    const arg1Length = (arg1Fractional && arg1Fractional.length) || 0
    const arg2Length = (arg2Fractional && arg2Fractional.length) || 0
    const differenceMultiple = Math.pow(10, arg2Length - arg1Length)
    return multiply(
      Number(String(arg1).replace('.', '')) /
        Number(String(arg2).replace('.', '')),
      differenceMultiple
    )
  } catch (e) {
    return NaN
  }
}
