/**
 * @version 0.0.1
 * 从后台获取地区参数转换成element-ui Cascader 级联选择器需要的数据格式
 * 参照 https://github.com/Plortinus/element-china-area-data
 * DtPCAreaDataPlus  完整数据格式 得到的是省市区编码
 * DtPCAreacodeText  可以根据省市区编码得到省市区名字
 */
import DtAreaDataGetFun from "./PcAreaData/DtAreaTransfromDataFitElementUi";
import DtPCAreaDataPlus from './PcAreaData/DtPCAreaDataPlusHasAll';
import DtPCAreaDataPlusNoneAll from './PcAreaData/DtPCAreaDataPlusNoneAll';
import DtPCAreaCodeText from './PcAreaData/DtPCAreacodeTextStatic';
const DtPCAreaDataPlusAccordAll = (needAll = true) => {
  if (needAll) {
    return DtPCAreaDataPlus
  } else {
    return DtPCAreaDataPlusNoneAll
  }
}
export {
  DtAreaDataGetFun,
  DtPCAreaDataPlus,
  DtPCAreaCodeText,
  DtPCAreaDataPlusNoneAll,
  DtPCAreaDataPlusAccordAll
};
