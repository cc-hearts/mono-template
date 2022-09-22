/**
 * @author heart
 * @description
 * @Date 2022-08-31
 */

/**
 * object covert to Params
 * @param {Object | undefined} obj
 * @returns {String | null}
 */
export function objectConvertParams(obj: Record<string, unknown> | undefined): string | null {
  if (typeof obj === 'object') {
    let params = ''
    let flag = true
    for (const key in obj) {
      params += (flag ? '' : '&') + `${key}=${encodeURI(Reflect.get(obj, key))}`
      flag = false
    }
    return params
  }
  return null
}

/**
 * params to object
 * @param {String} httpUrl
 * @returns {Object | null}
 */
export function getParams(httpUrl: string): Record<string, unknown> | null {
  try {
    return JSON.parse(`{"${decodeURI(httpUrl.split('?')[1]).replace(/"/, '\\"').replace(/=/g, '":"').replace(/&/g, '","')}"}`)
  } catch (e) {
    console.error(e)
    return null
  }
}

/**
 * 将华氏温度转换为摄氏温度
 * @param {String} fahrenheit 华氏温度
 * @returns {String}
 */
export const fahrenheitToCelsius = (fahrenheit: number) => ((fahrenheit - 32) * 5) / 9

/**
 * 将摄氏温度转华氏温度
 * @param {String} celsius
 * @returns {String}
 */
export const celsiusToFahrenheit = (celsius: number) => (celsius * 9) / 5 + 32
