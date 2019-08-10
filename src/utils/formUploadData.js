/**
 * 上传方法【excel文件、图片等等】
 */
import formatParams from '../utils/formtParams';
let baseUrl = 'http://120.24.55.58:8021/index.php/'

export const formSend = (url, params) => {
  params = formatParams(params) // 格式化参数
  let formData = new FormData();
  for (let [key, value] of Object.entries(params)) {
    formData.append(key, value)
  }
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open('POST', baseUrl + url, true)
      // oReq.onload = function(oEvent) {}
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          let obj = xhr.response
          typeof obj !== 'object' && (obj = JSON.parse(obj))
          obj['errcode'] === 0 ? resolve(obj) : reject(obj)
        } else {
          reject(xhr)
        }
      }
    }
    xhr.send(formData)
  })
}
