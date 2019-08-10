/**
 * 上传方法【excel文件、图片等等】
 * @params { Object } params - { 'myFile': e.target.files[0] }
 */
import { baseUrl } from '../config/index'
const formatParams = params => {
  Object.keys(params).forEach(key => {
    (params[key] === '' || params[key] === undefined) && delete params[key]
  })
  return params
}

export const send = (url, params) => {
  params = formatParams(params)
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
