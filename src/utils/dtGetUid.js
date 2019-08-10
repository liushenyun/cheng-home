/**
 * Dtston 微信登录获取uid、token（有些有flag）
 * @version 0.0.1
 * @returns { Object } args - {uid:'10004',token:'dsldkoe2987dasdkjhjk'}
 */
let dtGetUid = () => {
  let qs = location.search.length > 0 ? location.search.substring(1) : '';
  let args = {};
  let items = qs.length ? qs.split('&') : [];
  // let key = null;
  // let value = null;
  items.forEach(v => {
    let i = v.indexOf('=');
    let key = decodeURIComponent(v.substring(0, i));
    let value = decodeURIComponent(v.substring(i + 1));
    if (key.length) {
      args[key] = value
    }
  })
  return args;
}
export default dtGetUid;
