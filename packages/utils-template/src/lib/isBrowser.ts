/**
 * @author heart
 * @description 浏览器条件
 * @Date 2022-09-10
 */

/**
 * 检查当前选项卡是否在后台
 * @returns {Boolean}
 */
export const isTabActive = () => !document.hidden

/**
 * 检测元素是否处于焦点
 * @description activeElement属性返回文档中当前获得焦点的元素。
 * @param {HTMLElement} el
 * @returns {Boolean}
 */
export const elementIsInFocus = (el: HTMLElement) =>
  el === document.activeElement

/**
 * 检查设备类型
 * @description 使用navigator.userAgent判断是移动设备还是电脑设备
 * @returns {Boolean}
 */
export const judgeDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|OperaMini/i.test(
    navigator.userAgent
  )
    ? 'Mobile'
    : 'PC'

export const isWeekDay = (date: Date) => date.getDay() % 6 !== 0
