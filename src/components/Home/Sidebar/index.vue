<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu
        :index="index + ''"
        v-for="(item, index) in sidebarList"
        :key="index"
      >
        <template #title>
          <span>{{ item.label }}</span>
        </template>
        <el-menu-item
          :index="index + '-' + key"
          v-for="(val, key) in item.children"
          :key="key"
          @click="(data) => menuItemClick(data, val)"
        >
          <template #title>
            <div class="menuItemStyle" :title="val.label">{{ val.label }}</div>
          </template>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import {
  Avatar,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
import { sidebarList } from "./config";

interface MenuItem {
  active: object;
  index: string;
  indexPath: object;
}

const router = useRouter();

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const menuItemClick = (data: MenuItem, val: object) => {
  let {
    active,
    index,
    indexPath,
  }: { active: object; index: string; indexPath: object } = data;
  router.push({ name: val.path + "/" + val.title, params: { ...val } });
  // router.push({ name: val.path, params: { path: val.title, ...val } });
  console.log("menuItemClick", data, active, index, indexPath, val);
};
</script>
<style scoped>
.menuItemStyle {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>