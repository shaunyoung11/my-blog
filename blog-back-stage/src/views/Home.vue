<template>
  <el-container>
    <el-header>
      <global-header />
    </el-header>
    <el-container>
      <el-aside>
        <global-sidebar />
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <el-footer>
      <global-footer />
    </el-footer>
  </el-container>
</template>

<script>
import globalHeader from "../components/global/global-header";
import globalSidebar from "../components/global/global-sidebar";
import globalFooter from "../components/global/global-footer";
export default {
  data() {
    return {};
  },
  components: {
    globalHeader,
    globalSidebar,
    globalFooter,
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
  height: calc(100vh - 100px);
  background-color: #fff;
}
.el-main {
  height: calc(100vh - 100px);
}
.el-footer {
  height: 40px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  p {
    margin: 0;
    padding: 0;
  }
}
</style>