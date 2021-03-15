<template>
  <div class="links">
    <el-table fit :data="link" stripe>
      <el-table-column prop="name" label="友链名称"></el-table-column>
      <el-table-column prop="url" label="友链地址"></el-table-column>
      <el-table-column prop="title" label="友链简介">
        <template slot-scope="scope">
          <el-input v-model="scope.row.title">
            <el-button slot="append">修改</el-button>
          </el-input>
        </template>
      </el-table-column>
      <el-table-column prop="logo" label="友链头像">
        <template slot-scope="scope">
          <el-input v-model="scope.row.logo">
            <el-avatar
              slot="append"
              :src="scope.row.logo"
              shape="square"
            ></el-avatar>
          </el-input>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      link: [],
    };
  },
  mounted() {
    this.$http.get("/front/getLink").then((res) => {
      console.log(res);
      this.$data.link = res.data.data.link;
    });
  },
};
</script>

<style lang="scss" scoped>
</style>