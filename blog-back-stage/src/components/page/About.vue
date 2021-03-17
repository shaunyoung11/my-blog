<template>
  <div class="about">
    <el-input
      type="textarea"
      v-model="about.content"
      :autosize="{ minRows: 20 }"
    ></el-input>
    <el-button @click="handleSubmitAbout">确认</el-button>
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
</style>