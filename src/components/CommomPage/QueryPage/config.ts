interface myObj {
  name: string;
  label: string;
  elName: string;
  value?: string | number | Array<String>;
}

const userArray: Array<myObj> = [
  { name: "userId", label: "用户ID", elName: "ElInputNumber" },
  { name: "userName", label: "用户名", elName: "ElInput", value: "" },
  { name: "userPassword", label: "用户密码", elName: "ElInput", value: "" },
]

const emergeArray: Array<myObj> = [
  { name: "emergeId", label: "分类ID", elName: "ElInputNumber" },
  { name: "emergeTag", label: "分类名", elName: "ElInput", value: "" },
]


const productArray: Array<myObj> = [
  { name: "productName", label: "商品名称", elName: "ElInput", value: "" },
  { name: "productMsg", label: "商品信息", elName: "ElInput", value: "" },
  { name: "productPrice", label: "商品市场价格", elName: "ElInputNumber", value: 0 },
  { name: "productSellingPrice", label: "商品销售价格", elName: "ElInputNumber", value: 0 },
  { name: "productStock", label: "商品库存", elName: "ElInputNumber", value: 0 },
  { name: "productSalesVolume", label: "商品销量", elName: "ElInputNumber", value: 0 },
  { name: "productSize", label: "商品尺寸", elName: "ArrayStr", value: [] },
  { name: "productColor", label: "商品颜色", elName: "ArrayStr", value: [] },
  { name: "productEmergeSite", label: "商品浮现定位", elName: "ElInput", value: "" },
  { name: "productName", label: "商品类型", elName: "ElInput", value: "" },
  { name: "productRotationImg", label: "商品轮播图", elName: "ArrayImg", value: [] },
  { name: "productMsgImg", label: "商品详情图", elName: "ArrayImg", value: [] },
]

const getParam = (strArr: Array<string>, objArr: Array<myObj>,): Array<myObj> => {
  return objArr.filter((value: myObj) => {
    return strArr.includes(value.name)
  })
}

const queryObj: object = {
  "queryAllUser": { param: getParam(["userId", "userName", "userPassword"], userArray) },
  "queryAllEmerge": { param: getParam(["emergeId", "emergeTag"], emergeArray) },
}

module.exports = { queryObj }