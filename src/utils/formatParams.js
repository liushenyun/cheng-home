/**
 * 格式化参数对象，去掉参数对象value为空的属性
 * @param { Object } params - { 'device_id': '', 'mac': 'EASF450'  }
 * @returns { Object } - { 'mac': EASF450 }
 * @example
 * formatParams({ 'device_id': '', 'mac': 'EASF450'  })
 * // => { 'mac': 'EASF450' }
 */
const formatParams = params => { // 去参数
  Object.keys(params).forEach(key => {
    (params[key] === '' || params[key] === undefined) && delete params[key]
  })
  return params
}

export default formatParams;
