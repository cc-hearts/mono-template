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
