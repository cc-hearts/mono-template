/**
 * @author heart
 * @description 条件判断库
 * @Date 2022-08-27
 */

/**
 * 是否是中文字符
 */
export function isChineseCharacter(arg: string): boolean {
  const reg = /[\u4E00-\u9FFF]+/g
  return reg.test(arg)
}

/**
 * validate is valid json
 * @param string
 * @returns
 */
export const isValidJSON = (string: string): boolean => {
  try {
    JSON.parse(string)
    return true
  } catch (err) {
    console.error('json is invalid:', err)
    return false
  }
}

export function prototypeToString(param: unknown) {
  return Object.prototype.toString.call(param)
}

export const isObject = (param: unknown) =>
  prototypeToString(param) === '[object Object]'

export const isNull = (param: unknown) =>
  prototypeToString(param) === '[object Null]'

export const isValidNumber = (param: number) => {
  return prototypeToString(param) === '[object Number]' && !isNaN(param)
}

export const isEmptyObject = (param: Record<PropertyKey, unknown>) => {
  //  判断相等还可以使用 pram.constructor === Object 这样判断
  return Reflect.ownKeys(param).length === 0 && isObject(param)
}
