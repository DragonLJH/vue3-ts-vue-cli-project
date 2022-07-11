interface myObj {
  name: string;
  label: string;
  type: string;
}

const userArray: Array<myObj> = [
  { name: "userId", label: "用户ID", type: "number" },
  { name: "userName", label: "用户名", type: "string" },
  { name: "userPassword", label: "用户密码", type: "string" },
]

const emergeArray: Array<myObj> = [
  { name: "emergeId", label: "分类ID", type: "number" },
  { name: "emergeTag", label: "分类名", type: "string" },
]


const productArray: Array<myObj> = [
  { name: "productName", label: "商品名称", type: "string" },
  { name: "productMsg", label: "商品信息", type: "string" },
  { name: "productPrice", label: "商品市场价格", type: "number" },
  { name: "productSellingPrice", label: "商品销售价格", type: "number" },
  { name: "productStock", label: "商品库存", type: "number" },
  { name: "productSalesVolume", label: "商品销量", type: "number" },
  { name: "productSize", label: "商品尺寸", type: "Array" },
  { name: "productColor", label: "商品颜色", type: "Array" },
  { name: "productEmergeSite", label: "商品浮现定位", type: "string" },
  { name: "productType", label: "商品类型", type: "string" },
  { name: "productRotationImg", label: "商品轮播图", type: "Array" },
  { name: "productMsgImg", label: "商品详情图", type: "Array" },
]

const getParam = (strArr: Array<string>, objArr: Array<myObj>,): Array<myObj> => {
  return objArr.filter((val: myObj) => {
    return strArr.includes(val.name)
  })
}

const queryObj: object = {
  "queryAllUser": { param: getParam(["userId", "userName", "userPassword"], userArray) },
  "queryAllEmerge": { param: getParam(["emergeId", "emergeTag"], emergeArray) },
}
module.exports = { queryObj }