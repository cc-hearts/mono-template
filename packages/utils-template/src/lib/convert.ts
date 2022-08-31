/**
 * @author heart
 * @description
 * @Date 2022-08-31
 */

/**
 * object covert to Params
 * @param obj
 * @returns
 */
export function objectConvertParams(
  obj: Record<string, unknown> | undefined
): string {
  if (typeof obj === 'object') {
    let params = ''
    let flag = true
    for (const key in obj) {
      params += (flag ? '' : '&') + `${key}=${encodeURI(Reflect.get(obj, key))}`
      flag = false
    }
    return params
  }
  return ''
}
