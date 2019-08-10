/* eslint-disable */
import DtArea from "./DtAreaDataFromService.js";
const hasAll = false;
const DtAreaDataGetFun = (needAll = false) => {
  let DtAreacodeText = { 'all': '' };
  let DtAreaData = DtArea.data;
  let DtAreaDataPlus = [];
  // let DtAreaDataPlus = [{ "value": 'all', "label": '全部' }];
  if (hasAll) {
    DtAreaDataPlus.push({ "value": 'all', "label": '全部' });
  }
  DtAreaData.forEach((val1, index1) => {
    DtAreacodeText[val1.id] = val1.name;
    let shengAreaGet = { "value": val1.id, "label": val1.name };
    let CityData = val1.data;
    // let cityCh2 = [{ "value": "all", "label": "全部" }];
    let cityCh2 = [];
    if (hasAll) {
      cityCh2.push({ "value": "all", "label": "全部" });
    }
    CityData.forEach((val2, index2) => {
      DtAreacodeText[val2.id] = val2.name;
      let cityDataGet = { "value": val2.id, "label": val2.name };
      let districtData = val2.data;
      // let districtCh3 = [{ "value": "all", "label": "全部" }];
      let districtCh3 = [];
      if (hasAll) {
        districtCh3.push({ "value": "all", "label": "全部" });
      }
      districtData.forEach((val3, index3) => {
        DtAreacodeText[val3.id] = val3.name;
        districtCh3.push({
          "value": val3.id,
          "label": val3.name
        })
      })
      cityDataGet.children = districtCh3;
      cityCh2.push(cityDataGet);
    })
    shengAreaGet.children = cityCh2;
    DtAreaDataPlus.push(shengAreaGet);
  });
  return {
    DtAreaDataPlus,
    DtAreacodeText
  }
}
export default DtAreaDataGetFun;
