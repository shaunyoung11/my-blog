<template>
  <el-container>
    <el-header></el-header>
    <el-container>
      <el-aside></el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
import globalheader from "../components/global/global-header";
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>