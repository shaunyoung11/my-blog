<template>
  <el-container>
    <el-header>
      <globalheader />
    </el-header>
    <el-container>
      <el-aside>
        <globalsidebar />
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
import globalheader from "../components/global/global-header";
import globalsidebar from "../components/global/global-sidebar";
export default {
  data() {
    return {};
  },
  components: {
    globalheader,
    globalsidebar,
  },
};
</script>

<style lang="scss" scoped>
.el-header {
  width: 100%;
  height: 50px;
  background-color: #fff;
  .header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
}
.el-aside {
  height: calc(100vh - 90px);
  background-color: #fff;
}

.el-footer {
  height: 40px;
  background-color: #fff;
}
</style>