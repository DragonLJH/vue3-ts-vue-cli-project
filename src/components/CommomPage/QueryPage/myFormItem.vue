<template>
  <el-input v-if="item.elName ===  'ElInput'" v-model="item.value" placeholder="Please input" />
  <el-input-number v-if="item.elName ===  'ElInputNumber'" v-model="item.value" :min="1" :max="100" />
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