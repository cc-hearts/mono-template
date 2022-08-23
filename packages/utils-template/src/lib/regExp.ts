/**
 * @author heart
 * @description 正则
 * @Date 2022-08-12
 */

/**
 * 千分位数字分割
 * @param arg
 * @returns
 */
export function digitalAmountSplit(arg: string | number): string {
  let reg = /(?!^)(?=(\d{3})+\.)/g
  const isHasDecimal = String(arg).split('.')[1]
  if (!isHasDecimal) {
    reg = /(?!^)(?=(\d{3})+$)/g
  }
  return String(arg).replace(reg, ',')
}

/**
 * 千分位数字分割
 * @param arg
 * @returns
 */

// ?= ?! 非捕获
export function digitalAmountSplit2(arg: string | number): string {
  const reg = /\B(?=(\d{3})+(?!\d))/g
  // 第一个匹配到的match是replace需要替换的字符
  return String(arg).replace(reg, function (match, p1, offset, string) {
    console.log(match, p1, offset, string)
    console.log(arguments)
    return ','
  })
}

// \b 匹配单词边界
console.log('hello'.replace(/\b/g, '!'))
// \B 匹配非单词边界
console.log('hello'.replace(/\B/g, '!'))
