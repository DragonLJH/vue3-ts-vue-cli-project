<template>
  <div>
    <el-table :data="tableData" style="width: 100%" max-height="400">
      <template v-for="(item, index) in mainObj.param" :key="index">
        <!-- <el-table-column :prop="item.name" :label="item.label" /> -->
        <el-table-column :label="item.label">
          <template #default="scope">
            <span
              v-if="item.name.indexOf('Img') != -1"
              style="margin-left: 10px"
            >
              <el-image
                v-if="typeof scope.row[item.name] === 'string'"
                style="width: 100px; height: 100px"
                :src="scope.row[item.name]"
                fit="cover"
              />
              <el-image
                v-else
                style="width: 100px; height: 100px"
                :src="scope.row[item.name][0]"
                :preview-src-list="scope.row[item.name]"
                fit="cover"
              />
            </span>
            <span v-else style="margin-left: 10px">{{
              scope.row[item.name]
            }}</span>
          </template>
        </el-table-column>
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
        <h4>{{newlyAdded.label}}</h4>
      </template>
      <template #default>
        <el-form :model="mainObj.param" label-width="100px">
          <template v-for="(item, index) in mainObj.param">
            <el-form-item
              :label="item.label"
              v-if="item?.value != undefined"
              :key="index"
            >
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
  </div>
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
    let { url, label, path, title, newlyAdded, strikeOut } = Route.query;
    newlyAdded = JSON.parse(newlyAdded);
    strikeOut = JSON.parse(strikeOut);
    const mainObj = reactive(queryObj[Route.params.path]);
    const mainData = reactive({ tableData: [] });
    const drawer = ref(false);

    function mySubmitFun() {
      console.log("mySubmitFun", Route.query);
    }
    console.log(" Route.query", {
      url,
      label,
      path,
      title,
      newlyAdded,
      strikeOut,
    });
    queryAllMsg(url).then(function (data) {
      mainData.tableData = data;
    });
    console.log("Route", Route);
    console.log("mainData", mainData);
    return {
      ...toRefs(Route),
      ...toRefs(mainData),
      mainObj,
      mainData,
      drawer,
      mySubmitFun,
      newlyAdded
    };
  },
});
</script>

<style>
</style>