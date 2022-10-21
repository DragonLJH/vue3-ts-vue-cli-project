<template>
  {{ props.modelValue }}
  <el-input v-model="input" placeholder="Please input">
    <template #append>
      <el-button :icon="Plus" @click="add" />
    </template>
  </el-input>
</template>

<script lang="ts">
import { defineComponent, h, reactive, ref } from "vue";
import { Plus } from "@element-plus/icons-vue";
export default defineComponent({
  name: "myArrayStr",
  props: {
    modelValue: { type: Array },
  },
  emits: ["update:modelValue"],
  setup(props: any, context: any) {
    const { modelValue } = props;
    // const arr = reactive({ list: modelValue });
    const input = ref("");
    function add() {
      context.emit("update:modelValue", [...props.modelValue, input.value]);
      input.value = "";
    }
    return { props, input, add };
  },
});
</script>