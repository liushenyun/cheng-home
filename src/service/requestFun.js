import Vue from "vue";
import fetch from './index';
import apiUrl from './apiUrl';
import Validate from './Validate';
import { aesEncrypt } from "../utils/dtAes";
import isEmpty from "../utils/isEmpty";
import { send } from './formdata';

/* ==== 用户http请求提示 =====  */
const SuccessTips = (con, callbck, type = 'success') => {
  Vue.prototype.$message({
    showClose: true,
    message: con,
    duration: 1500,
    type: type
  });
  setTimeout(() => {
    callbck && callbck()
  }, 1400);
};

export default {
  SuccessTips
}
