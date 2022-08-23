/**
 * @author heart
 * @description 兼容各种模块写法 获取全局顶层this
 * @Date 2022-08-23
 */

;((globalThis) => {
  console.log(globalThis)
})((0, eval)('this'))

export {}
