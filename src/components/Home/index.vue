<template>
  <div class="common-layout">
    <el-container>
      <el-header><top-nav /></el-header>
      <el-container>
        <el-aside width="200px"><Sidebar /></el-aside>
        <el-container>
          <el-main><app-main /></el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AppMain from "./AppMain/index.vue";
import Sidebar from "./Sidebar/index.vue";
import TopNav from "./TopNav/index.vue";

export default {
  name: "Home",
  components: {
    AppMain,
    Sidebar,
    TopNav,
  },
};
</script>

<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>