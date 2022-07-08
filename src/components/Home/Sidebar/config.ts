const sidebarList: Array<Object> = [
  {
    title: "User Controller", label: "用户管理", icon: "", type: "user", children: [
      { title: "insertUser", label: "注册用户", path: "/uploadPage", url: "/user/insertUser" },
      { title: "queryAllUser", label: "查询所有用户信息", path: "/queryPage", url: "/user/queryAllUser" },
    ]
  },
  {
    title: "Emerge Controller", label: "分类管理", icon: "", type: "emerge", children: [
      { title: "deleteEmergeById", label: "根据id删除分类信息", path: "/queryPage", url: "/emerge/deleteEmergeById" },
      { title: "insertEmerge", label: "新增分类信息", path: "/uploadPage", url: "/emerge/insertEmerge" },
      { title: "queryAllEmerge", label: "查询所有分类信息", path: "/queryPage", url: "/emerge/queryAllEmerge" },
    ]
  },
  {
    title: "Product Controller", label: "商品管理", icon: "", type: "product", children: [
      { title: "insertProduct", label: "新增商品", path: "/uploadPage", url: "/product/insertProduct" },
      { title: "uploadProductRotationImg", label: "上传商品图片", path: "/uploadPage", url: "/product/uploadProductRotationImg" },
      { title: "uploadProductMsgImg", label: "上传商品详情图片", path: "/uploadPage", url: "/product/uploadProductMsgImg" },
    ]
  },
  {
    title: "Type Controller", label: "类型管理", icon: "", type: "type", children: [
      { title: "deletdTypeById", label: "根据id删除类型", path: "/queryPage", url: "/type/deletdTypeById" },
      { title: "insertType", label: "新增类型", path: "/uploadPage", url: "/type/insertType" },
      { title: "queryAllType", label: "查询所有类型", path: "/queryPage", url: "/type/queryAllType" },
    ]
  },
  {
    title: "Order Controller", label: "订单管理", icon: "", type: "order", children: [
      { title: "queryAllOrder", label: "获取所有订单信息", path: "/queryPage", url: "/order/queryAllOrder" },
    ]
  },
  {
    title: "Comment Controller", label: "评论管理", icon: "", type: "comment", children: [
      { title: "deleteComment", label: "根据id删除产品评论信息", path: "/queryPage", url: "/comment/deleteComment" },
      { title: "insertComment", label: "新增产品评论信息", path: "/uploadPage", url: "/comment/insertComment" },
    ]
  },
  {
    title: "Shop Controller", label: "购物车管理", icon: "", type: "shop", children: [
      { title: "insertShop", label: "添加购物信息", path: "/uploadPage", url: "/shop/insertShop" },
      { title: "updateShopById", label: "更新购物车产品的数量", path: "/uploadPage", url: "/shop/updateShopById" },
      { title: "queryShopByUserName", label: "根据用户名获取购物车的商品", path: "/queryPage", url: "/shop/queryShopByUserName" },
    ]
  },
  {
    title: "Rotation Controller", label: "轮播管理", icon: "", type: "rotation", children: [
      { title: "deleteRotationById", label: "根据id删除轮播信息", path: "/queryPage", url: "/rotation/deleteRotationById" },
      { title: "insertRotation", label: "新增轮播信息", path: "/uploadPage", url: "/rotation/insertRotation" },
      { title: "uploadRotationImg", label: "上传轮播图片", path: "/uploadPage", url: "/rotation/uploadRotationImg" },
      { title: "queryAllRotation", label: "获取所有轮播信息", path: "/queryPage", url: "/rotation/queryAllRotation" },
    ]
  },
]





module.exports = { sidebarList }