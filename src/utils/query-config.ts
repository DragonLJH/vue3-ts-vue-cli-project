interface obj {
  name: string;
  label: string;
  elName: string;
  value?: string | number | Array<String>;
}

const userArray: Array<obj> = [
  { name: "userId", label: "用户ID", elName: "ElInputNumber" },
  { name: "userName", label: "用户名", elName: "ElInput", value: "" },
  { name: "userPassword", label: "用户密码", elName: "ElInput", value: "" },
]

const emergeArray: Array<obj> = [
  { name: "emergeId", label: "分类ID", elName: "ElInputNumber" },
  { name: "emergeTag", label: "分类名", elName: "ElInput", value: "" },
]


const commentArray: Array<obj> = [
  { name: "commentId", label: "评论ID", elName: "ElInputNumber" },
  { name: "productId", label: "商品ID", elName: "ElInput", value: "" },
  { name: "userName", label: "用户名", elName: "ElInput", value: "" },
  { name: "createDate ", label: "创建日期", elName: "ElInput"  },
  { name: "commentMsg", label: "评论信息", elName: "ElInput", value: "" },
]

const rotationArray: Array<obj> = [
  { name: "rotationId", label: "轮播图ID", elName: "ElInputNumber" },
  { name: "rotationImg", label: "轮播图", elName: "ElUpload", value: "" },
  { name: "productId", label: "对应产品ID", elName: "ElInput", value: "" },
]


const productArray: Array<obj> = [
  { name: "productId", label: "商品ID", elName: "ElInputNumber" },
  { name: "productName", label: "商品名称", elName: "ElInput", value: "" },
  { name: "productMsg", label: "商品信息", elName: "ElInput", value: "" },
  { name: "productPrice", label: "商品市场价格", elName: "ElInputNumber", value: 0 },
  { name: "productSellingPrice", label: "商品销售价格", elName: "ElInputNumber", value: 0 },
  { name: "productStock", label: "商品库存", elName: "ElInputNumber", value: 0 },
  { name: "productSalesVolume", label: "商品销量", elName: "ElInputNumber", value: 0 },
  { name: "productSize", label: "商品尺寸", elName: "ArrayStr", value: [] },
  { name: "productColor", label: "商品颜色", elName: "ArrayStr", value: [] },
  { name: "productEmergeSite", label: "商品浮现定位", elName: "ElInput", value: "" },
  { name: "productType", label: "商品类型", elName: "ElInput", value: "" },
  { name: "productRotationImg", label: "商品轮播图", elName: "ElUploads", value: [] },
  { name: "productMsgImg", label: "商品详情图", elName: "ElUploads", value: [] },
]
const shopArray: Array<obj> = [
  { name: "shopId", label: "购物ID", elName: "ElInputNumber" },
  { name: "userName", label: "用户名", elName: "ElInput" },
  { name: "productId", label: "商品ID", elName: "ElInputNumber" },
  { name: "productName", label: "商品名称", elName: "ElInput" },
  { name: "productRotationImg", label: "商品轮播图", elName: "ElUpload" },
  { name: "productSellingPrice", label: "商品销售价格", elName: "ElInputNumber" },
  { name: "selectColor", label: "商品颜色", elName: "ElInput" },
  { name: "selectSize", label: "商品尺寸", elName: "ElInput" },
  { name: "selectNum", label: "数量", elName: "ElInputNumber" },
]

const typeArray: Array<obj> = [
  { name: "typeId", label: "类型ID", elName: "ElInputNumber" },
  { name: "typeTitle", label: "类型名称", elName: "ElInput", value: "" },
]

const getParam = (strArr: Array<string>, objArr: Array<obj>,): Array<obj> => {
  return objArr.filter((value: obj) => {
    return strArr.includes(value.name)
  })
}

export const queryObj: object = {
  "queryAllUser": { param: getParam(["userId", "userName", "userPassword"], userArray) },
  "queryAllType": { param: getParam(["typeId", "typeTitle"], typeArray) },
  "queryAllEmerge": { param: getParam(["emergeId", "emergeTag"], emergeArray) },
  "queryAllRotation": { param: getParam(["rotationId", "rotationImg", "productId"], rotationArray) },
  "queryAllComment": { param: getParam(["commentId", "productId", "userName", "createDate", "commentMsg"], commentArray) },
  "queryAllProduct": {
    param: getParam(["productId", "productName", "productMsg", "productPrice", "productSellingPrice", "productStock",
      "productSalesVolume", "productSize", "productColor", "productEmergeSite", "productName", "productRotationImg", "productMsgImg"], productArray)
  },
  "queryAllShop": {
    param: getParam(["shopId", "userName", "productId", "productName", "productRotationImg",
      "selectColor", "selectSize", "selectNum", "productSellingPrice"], shopArray)
  }
}





// module.exports = { queryObj }