<template>
  <el-input
    v-if="item.elName === 'ElInput'"
    v-model="item.value"
    placeholder="Please input"
  />
  <MyArrayStr v-if="item.elName === 'ArrayStr'" v-model="item.value" />
  <el-input-number
    v-if="item.elName === 'ElInputNumber'"
    v-model="item.value"
    :min="1"
    controls-position="right"
  />
  <el-upload
    multiple
    v-if="item.elName === 'ElUploads'"
    v-model:file-list="item.value"
    :name="'upload' + titleCase(item.name)"
    :action="'/api/product/upload' + titleCase(item.name)"
    :on-success="handleSuccess"
    list-type="picture"
  >
    <el-button type="primary">上传（支持多选文件）</el-button>
  </el-upload>
  <el-upload
    v-if="item.elName === 'ElUpload'"
    v-model:file-list="item.value"
    :name="'upload' + titleCase(item.name)"
    :action="'/api/product/upload' + titleCase(item.name)"
    :on-success="handleSuccess"
    list-type="picture"
  >
    <el-button type="primary">上传 </el-button>
  </el-upload>
</template>

<script lang="ts">
import { defineComponent, h, reactive, toRefs } from "vue";
import MyArrayStr from "./myArrayStr.vue";

export default defineComponent({
  name: "myFormItem",
  components: { MyArrayStr },
  props: {
    item: { type: Object },
  },
  setup(props: any) {
    const titleCase = (str: string) => {
      return str.slice(0, 1).toUpperCase() + str.slice(1);
    };
    const handleSuccess = (
      response: any,
      uploadFile: any,
      uploadFiles: any
    ) => { 
      // props.item.value = [...response];
      console.log(props.item.value);
    };
    return {
      ...toRefs(props),
      titleCase,
      handleSuccess,
    };
  },
});
</script>