import isNull from './isNull';
import _isArray from "./isArray";
import isObject from './isObject';
import isEmpty from './isEmpty';
import debounce from "./debounce";
import throttle from "./throttle";
import isPhone from './isPhone'
import lessThanTenAddZero from './lessThanTenAddZero';
import getDateFromSomedayWithDistance from "../utils/getDateFromSomedayWithDistance.js";
import getTodayDate from "../utils/getTodayDate.js";
import dateFormat from "../utils/dateFormat.js";
import isEmail from '../utils/isEmail';
import formatParams from '../utils/formatParams';
// dt
import { aesEncrypt, aesDecrypt } from "../utils/dtAes";
import dtGetUid from "./dtGetUid";
import { openSocket, closeSocket } from "../utils/dtMqtt";
import { DtPCAreaDataPlus, DtPCAreacodeText } from './dtPcAreaDatafitEle';
// import dtIsMac from '../utils/dtIsMac';
export {
  isNull,
  _isArray as isArray,
  isObject,
  isEmpty,
  debounce,
  throttle,
  isPhone,
  lessThanTenAddZero,
  getDateFromSomedayWithDistance,
  getTodayDate,
  aesEncrypt,
  aesDecrypt,
  openSocket,
  dateFormat,
  isEmail,
  formatParams,
  // dtIsMac,
  closeSocket,
  dtGetUid,
  DtPCAreaDataPlus,
  DtPCAreacodeText
};
