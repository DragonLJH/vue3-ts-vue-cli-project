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
        <template #default="scope">
          <el-button
            link
            type="primary"
            size="small"
            @click="handleDel(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-button type="primary" style="margin-left: 16px" @click="drawer = true">
      新增
    </el-button>
    <el-drawer v-model="drawer" direction="rtl">
      <template #title>
        <h4>{{ newlyAdded.label }}</h4>
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
import { utilsQuery, utilsSidebar, utilsGetMsg } from "../../../utils";
import MyForm from "./myForm.vue";
import MyFormItem from "./myFormItem.vue";
import MyUpload from "./myUpload.vue";
import { queryAllMsg, deleteData, insertData } from "@/api/index";
export default defineComponent({
  name: "QueryPage",
  components: { MyForm, MyFormItem, MyUpload },
  setup() {
    const Route = useRoute(); //获取到值
    let { url, label, path, title, newlyAdded, strikeOut } = utilsGetMsg(
      Route.params.path
    );
    // let { url } = Route.query;
    // newlyAdded = JSON.parse(newlyAdded);
    // strikeOut = JSON.parse(strikeOut);
    const mainObj = reactive(utilsQuery[Route.params.path]);
    const mainData = reactive({ tableData: [] });
    const drawer = ref(false);

    function mySubmitFun() {
      const { url } = newlyAdded;
      let res = mainObj.param;
      let data = {}
      res.filter((val)=>{ 
        return Object.keys(val).includes("value") 
      }).forEach((val)=>{
        data[val.name]= val.value 
      });
      insertData(url, data).then(function (data) {
        console.log("insertData",data)
        if (data) initTable();
      }); 
    }
    const handleDel = (data) => {
      const { url } = strikeOut;
      deleteData(url, data).then(function (data) {
        if (data) initTable();
      });
    };
    const initTable = () => {
      queryAllMsg(url).then(function (data) {
        mainData.tableData = data;
      });
    };
    initTable();
    // console.log("Route", Route);
    // console.log("mainData", mainData);
    return {
      ...toRefs(Route),
      ...toRefs(mainData),
      mainObj,
      mainData,
      drawer,
      mySubmitFun,
      newlyAdded,
      handleDel,
    };
  },
});
</script>

<style>
</style>