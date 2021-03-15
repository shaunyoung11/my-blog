<template>
  <div class="overview">
    <el-form>
      <el-avatar shape="circle" :src="logoShow"></el-avatar>
      <!-- 站点logo -->
      <el-form-item
        v-for="item in siteInfo"
        :key="item.name"
        :label="item.label"
      >
        <el-input
          autocomplete="on"
          :name="item.name"
          :placeholder="item.placeholder"
          v-model="item.value"
        >
          <el-button slot="append" @click="handleChangeInfo">{{
            item.btn
          }}</el-button>
        </el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logoShow: "",
      siteInfo: [],
    };
  },

  methods: {
    // 处理更改网站信息事件
    handleChangeInfo() {
      console.log(this.siteInfo);
      this.$data.logoShow = this.siteInfo[0].value;
      this.$http
        .post("/back/postInfo", { siteInfo: this.siteInfo })
        .then((res) => {
          console.log(res);
          if (res.data.msg === "Succeed!") {
            this.$notify({
              title: "成功",
              message: "修改站点信息成功",
              type: "success",
              duration: 1000,
            });
          }
        });
    },
  },

  mounted() {
    this.$http.get("/front/getHeader").then((res) => {
      console.log(res);
      this.$data.siteInfo = res.data.data[0].siteInfo;
      this.$data.logoShow = this.siteInfo[0].value;
    });
  },
};
</script>

<style lang="scss" scoped>
</style>