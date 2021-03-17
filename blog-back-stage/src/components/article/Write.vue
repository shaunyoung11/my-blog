<template>
  <div class="write">
    <el-input
      type="text"
      placeholder="请输入文章标题"
      v-model="article.title"
    ></el-input>
    <el-input
      type="textarea"
      v-model="article.content"
      :autosize="{ minRows: 20 }"
    ></el-input>
    <el-button @click="handlePostArticle">确认</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: {
        title: "",
        content: "",
      },
    };
  },
  methods: {
    handlePostArticle() {},
  },
  mounted() {
    if (this.$props.cid) {
      this.$http.get("/front/getPost").then((res) => {
        console.log(res);
      });
    }
  },
};
</script>

<style lang="scss" scoped>
</style>