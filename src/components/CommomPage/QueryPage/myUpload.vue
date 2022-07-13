<template>
  <el-upload
    v-model:file-list="fileList"
    name="uploadProductRotationImg"
    class="upload-demo"
    action="/api/product/uploadProductRotationImg"
    :on-progress="handleProgress"
    :on-success="handleSuccess"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    list-type="picture"
  >
    <el-button type="primary">Click to upload</el-button>
    <template #tip>
      <div class="el-upload__tip">
        jpg/png files with a size less than 500kb
      </div>
    </template>
  </el-upload>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import type { UploadProps, UploadUserFile } from "element-plus";

const fileList = ref<UploadUserFile[]>([]);

const handleRemove: UploadProps["onRemove"] = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles);
};

const handlePreview: UploadProps["onPreview"] = (file) => {
  console.log(file);
};
const handleSuccess: UploadProps["onSuccess"] = (response) => {
  console.log("onSuccess", response);
};
const handleProgress: UploadProps["onProgress"] = (
  evt,
  uploadFile,
  uploadFiles
) => {
  console.log("onProgress", evt, uploadFile, uploadFiles);
};
</script>
