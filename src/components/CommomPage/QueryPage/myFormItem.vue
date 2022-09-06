<template>
  <el-input
    v-if="item.elName === 'ElInput'"
    v-model="item.value"
    placeholder="Please input"
  />
  <el-input-number
    v-if="item.elName === 'ElInputNumber'"
    v-model="item.value"
    :min="1"
    controls-position="right"
  />
  <el-upload
    v-if="item.elName === 'ElUploads'"
    v-model:file-list="item.value"
    name="uploadProductRotationImg"
    class="upload-demo"
    action="/api/product/uploadProductRotationImg"
    :on-success="handleSuccess"
    list-type="picture"
  >
    <el-button type="primary">上传（支持多选文件）</el-button>
  </el-upload>
  <el-upload
    v-if="item.elName === 'ElUpload'"
    v-model:file-list="item.value"
    name="uploadProductRotationImg"
    class="upload-demo"
    action="/api/product/uploadProductRotationImg"
    :on-success="handleSuccess"
    list-type="picture"
  >
    <el-button type="primary">上传（支持多选文件）</el-button>
  </el-upload>
</template>

<script lang="ts">
import { defineComponent, h, reactive } from "vue";

export default defineComponent({
  name: "myFormItem",
  props: {
    item: { type: Object },
  },
  setup(props: any) {
    const { item, modelValue } = props;
    console.log("myFormItem", item, modelValue);
    return {
      item,
    };
  },
});
</script>