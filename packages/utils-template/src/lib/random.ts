/**
 * @author heart
 * @description
 * @Date 2022-09-10
 */

/**
 * 生成随机十六进制颜色
 * @description padEnd 防止出现0的情况
 * @return {String}
 */
export function randomHexColor() {
  return `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, '0')}`
}
