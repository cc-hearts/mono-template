/**
 * @author heart
 * @description 剪切板API
 * @Date 2022-09-10
 */

/**
 * 文字复制到剪贴板
 * Clipboard API它的所有操作都是异步的，返回Promise对象，不会造成页面卡顿。而且，它可以将任意内容（比如图片）放入剪贴板
 * @param {String} text
 * @returns
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Clipboard/writeText
 */
export const copyText = (text: string) => navigator.clipboard.writeText(text)
