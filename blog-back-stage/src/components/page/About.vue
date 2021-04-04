<template>
  <div class="about">
    <el-input
      class="input"
      type="textarea"
      v-model="about.content"
      :autosize="{ minRows: 20 }"
    ></el-input>
    <el-button class="btn" @click="handleSubmitAbout">确认</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      about: "",
    };
  },
  methods: {
    handleSubmitAbout() {
      console.log(this.about);
      this.$http
        .post("/back/postAbout", {
          about: this.about,
        })
        .then((res) => {
          console.log(res);
          if (res.data.msg === "Succeed!") {
            this.$notify({
              title: "成功",
              message: "修改成功！",
              duration: 1000,
              type: "success",
            });
          } else {
            this.$notify({
              title: "失败",
              message: "修改失败，请检查服务器设置！",
              duration: 1000,
              type: "info",
            });
          }
        });
    },
  },
  mounted() {
    this.$http.get("/front/getAbout").then((res) => {
      console.log(res);
      this.$data.about = res.data.data.about[0];
    });
  },
};
</script>
<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .btn {
    margin-top: 20px;
  }
}
@media (max-width: 800px) {
  .about {
    .btn {
      width: 100%;
    }
  }
}
</style>