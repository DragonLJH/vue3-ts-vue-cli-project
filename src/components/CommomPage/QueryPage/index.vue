<template>
  <el-table :data="tableData" style="width: 100%" max-height="250">
    <template v-for="(item, index) in mainObj.param" :key="index">
      <el-table-column :prop="item.name" :label="item.label" />
    </template>
    <el-table-column fixed="right" label="操作" width="150">
      <template #default>
        <el-button link type="primary" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-button type="primary" style="margin-left: 16px" @click="drawer = true">
    新增
  </el-button>
  <el-drawer v-model="drawer" direction="rtl">
    <template #title>
      <h4>新增</h4>
    </template>
    <template #default>
      <el-form :model="mainObj.param" label-width="100px">
        <template v-for="(item, index) in mainObj.param" :key="index">
          <el-form-item :label="item.label" v-if="item?.value != undefined">
            <MyFormItem :item="item" />
          </el-form-item>
        </template>
      </el-form>
      <!-- <MyForm :formObj="mainObj.param" /> -->
      <!-- <MyUpload /> -->
    </template>
    <template #footer>
      <div style="flex: auto">
        <el-button>取消</el-button>
        <el-button type="primary" @click="mySubmitFun">提交</el-button>
      </div>
    </template>
  </el-drawer>
</template>

<script>
import { defineComponent, reactive, toRefs, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { queryObj } from "./config";
import MyForm from "./myForm.vue";
import MyFormItem from "./myFormItem.vue";
import MyUpload from "./myUpload.vue";
import { queryAllMsg } from "@/api/index";
export default defineComponent({
  name: "QueryPage",
  components: { MyForm, MyFormItem, MyUpload },
  setup() {
    const Route = useRoute(); //获取到值
    const { url, label, path, title } = Route.query;
    const mainObj = reactive(queryObj[Route.params.path]);
    const mainData = reactive({ tableData: [] });
    const drawer = ref(false);

    function mySubmitFun() {
      console.log("mySubmitFun", mainObj);
    }
    console.log("Route", Route);
    console.log("url", url);
    console.log("queryObj", queryObj[Route.params.path]);
    queryAllMsg(url).then(function (data) {
      mainData.tableData = data;
      console.log("myAxios", data);
    });
    return {
      ...toRefs(Route),
      ...toRefs(mainData),
      mainObj,
      mainData,
      drawer,
      mySubmitFun,
    };
  },
});
</script>

<style>
</style>