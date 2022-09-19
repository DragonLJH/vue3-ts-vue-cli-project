interface sidebarObject {
    title: string;
    label: string;
    icon: string;
    type: string;
    children: Array<childrenObject>;
}

interface childrenObject {
    title: string;
    label: string;
    path?: string;
    url: string;
    newlyAdded?: childrenObject;
    strikeOut?: childrenObject;
}

export const sidebarList: Array<sidebarObject> = [
    {
        title: "User Controller", label: "用户管理", icon: "", type: "user", children: [
            {
                title: "queryAllUser", label: "查询所有用户信息", path: "/queryPage", url: "/user/queryAllUser",
                newlyAdded: { title: "insertUser", label: "注册用户", url: "/user/insertUser" },
                strikeOut: { title: "deleteUserById", label: "根据id删除用户信息", url: "/user/deleteUserById" }
            },
        ]
    },
    {
        title: "Emerge Controller", label: "分类管理", icon: "", type: "emerge", children: [
            {
                title: "queryAllEmerge", label: "查询所有分类信息", path: "/queryPage", url: "/emerge/queryAllEmerge",
                newlyAdded: { title: "insertEmerge", label: "新增分类信息", url: "/emerge/insertEmerge" },
                strikeOut: { title: "deleteEmergeById", label: "根据id删除分类信息", url: "/emerge/deleteEmergeById" }

            },
        ]
    },
    {
        title: "Product Controller", label: "商品管理", icon: "", type: "product", children: [
            {
                title: "queryAllProduct", label: "获取所有商品信息", path: "/queryPage", url: "/product/queryAllProduct",
                newlyAdded: { title: "insertProduct", label: "新增商品", path: "/uploadPage", url: "/product/insertProduct" },
                strikeOut: { title: "deleteProductById", label: "根据id删除商品", url: "/product/deleteProductById" }
            },
            { title: "uploadProductRotationImg", label: "上传商品图片", path: "/uploadPage", url: "/product/uploadProductRotationImg" },
            { title: "uploadProductMsgImg", label: "上传商品详情图片", path: "/uploadPage", url: "/product/uploadProductMsgImg" },
        ]
    },
    {
        title: "Type Controller", label: "类型管理", icon: "", type: "type", children: [
            {
                title: "queryAllType", label: "查询所有类型", path: "/queryPage", url: "/type/queryAllType",
                newlyAdded: { title: "insertType", label: "新增类型", url: "/type/insertType" },
                strikeOut: { title: "deletdTypeById", label: "根据id删除类型", url: "/type/deletdTypeById" }
            },
        ]
    },
    {
        title: "Order Controller", label: "订单管理", icon: "", type: "order", children: [
            {
                title: "queryAllOrder", label: "获取所有订单信息", path: "/queryPage", url: "/order/queryAllOrder",
                newlyAdded: { title: "insertOrder", label: "新增订单", url: "/order/insertOrder" },
                strikeOut: { title: "deletdOrderById", label: "根据id删除订单", url: "/type/deletdOrderById" }
            },
        ]
    },
    {
        title: "Comment Controller", label: "评论管理", icon: "", type: "comment", children: [
            {
                title: "queryAllComment", label: "获取所有评论信息", path: "/queryPage", url: "/comment/queryAllComment",
                newlyAdded: { title: "insertComment", label: "新增产品评论信息", url: "/comment/insertComment" },
                strikeOut: { title: "deleteComment", label: "根据id删除产品评论信息", url: "/comment/deleteComment" }
            },
        ]
    },
    {
        title: "Shop Controller", label: "购物车管理", icon: "", type: "shop", children: [
            { title: "insertShop", label: "添加购物信息", path: "/uploadPage", url: "/shop/insertShop" },
            { title: "updateShopById", label: "更新购物车产品的数量", path: "/uploadPage", url: "/shop/updateShopById" },
            { title: "queryShopByUserName", label: "根据用户名获取购物车的商品", path: "/queryPage", url: "/shop/queryShopByUserName" },
            {
                title: "queryAllShop", label: "获取所有购物车的商品信息", path: "/queryPage", url: "/shop/queryAllShop",
                newlyAdded: { title: "insertShop", label: "添加购物信息", url: "/shop/insertShop" },
                strikeOut: { title: "deleteShopbyId", label: "根据id删除购物信息", url: "/shop/deleteShopbyId" }
            },
        ]
    },
    {
        title: "Rotation Controller", label: "轮播管理", icon: "", type: "rotation", children: [
            { title: "deleteRotationById", label: "根据id删除轮播信息", path: "/queryPage", url: "/rotation/deleteRotationById" },
            { title: "insertRotation", label: "新增轮播信息", path: "/uploadPage", url: "/rotation/insertRotation" },
            { title: "uploadRotationImg", label: "上传轮播图片", path: "/uploadPage", url: "/rotation/uploadRotationImg" },
            {
                title: "queryAllRotation", label: "获取所有轮播信息", path: "/queryPage", url: "/rotation/queryAllRotation",
                newlyAdded: { title: "insertRotation", label: "新增轮播信息", url: "/rotation/insertRotation" },
                strikeOut: { title: "deleteRotationById", label: "根据id删除轮播信息", url: "/rotation/deleteRotationById" }
            },
        ]
    },
]

const msgMap = new Map()

sidebarList.forEach((val) => {
    val.children.forEach((msg) => {
        msgMap.set(msg.title, msg)
    })
})

export const getMsg = (title: string) => {
    return msgMap.get(title)
}


// module.exports = { sidebarList } 