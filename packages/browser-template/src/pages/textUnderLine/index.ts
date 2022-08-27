/**
 * @author heart
 * @description 下划线
 * @Date 2022-08-25
 */
import './index.css'
const app = document.getElementById('app')
const content =
  '下划线展示两行占位 如果文字超出了两行的距离的话  则还需要展示下划线的样式 比如现在这样'
const underLine =
  'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
// // 中文占用两个字符
// let flag = true
// const reg = new RegExp('[\\u4E00-\\u9FFF]+')
// let count = 0
// for (let i = 0; i < content.length; i++) {
//   if (reg.test(content.charAt(i))) {
//     if (!flag) flag = true
//     count += 2
//   } else if (content.charAt(i) === ' ' && flag) {
//     // 一个空格解析
//     count++
//     continue
//   } else {
//     if (!flag) flag = true
//     count++
//   }
// }
// const total = underLine.length
// underLine = underLine.slice(count - total)
if (app) {
  app.innerHTML = `
<div class="g-wrap">
      随机重要件记录：<span class="text-underline">${content}</span> ABC END.
</div>
`
}

const contentDom = document
  .getElementsByClassName('content')[0]
  .getBoundingClientRect()

console.log(contentDom)

export {}
