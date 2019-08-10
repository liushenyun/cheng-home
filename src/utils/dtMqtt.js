/**
 * Dtston  wechat mqtt
 * @version 0.0.1
 * 需要mqtt插件：npm install mqtt --sava
 * 测试地址：http://testfiles.ourslinks.com:8080/
 * 测试的时候可以:
 * 主题：dt2014/web/e0b94da08400
 * 要发送的消息结构：{"project":"yiannuo","type":"status","data":{"refrigerate_switch":"1","today_make_water":"20","total_make_water":"56","raw_water":100,"pure_water":80}}
 * import { closeSocket, openSocket } from "../utils/dtMqtt.js";
 * 方法：openSocket() =>连接mqtt
 * 方法：closeSocket() => 关闭mqtt 防止浪费资源
 */
import mqtt from 'mqtt'
let _client = null

/**
 * 连接mqtt，订阅主题、接收mqtt消息
 * @param { String } topic 所要订阅的主题 - 'e0b94da08400'（所订阅的mac地址主题）
 * @param { Function } callback 收到推送消息后的回调（后台推送）
 * @example
 * openSocket('e0b94da08400', msg => {
 * msg => 接收到mqtt的消息
 * });
 */
const openSocket = (topic, callback) => {
  // 解决连接多次的问题
  if (_client && _client.connected) {
    return
  };
  // 连接
  _client = mqtt.connect({
    port: 9001,
    host: '120.24.55.58'
  });

  // 订阅主题
  _client.on('connect', (msg, x, y) => {
    _client.subscribe(`dt2014/web/${topic}`)
  });

  // 接收mqtt消息
  _client.on('message', (topic, message) => {
    let data = message.toString()
    try {
      data = JSON.parse(data)
    } catch (e) {}
    callback(data)
  })
}

/**
 * 关闭mqtt，防止浪费资源
 * @example
 * vue中组件销毁后关闭mqtt
 * destroyed() {
 *    closeSocket();
 *  }
 */
const closeSocket = () => {
  if (_client) {
    // 强制关闭，关闭成功后给_client对象复制为空
    _client.end('force', () => {
      _client = null;
    });
  }
}

export {
  openSocket,
  closeSocket
}
