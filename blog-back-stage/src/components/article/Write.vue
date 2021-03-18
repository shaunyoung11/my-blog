<template>
  <div class="write">
    <el-input
      type="text"
      placeholder="请输入文章标题"
      v-model="article.title"
    ></el-input>
    <el-input
      type="textarea"
      v-model="content"
      :autosize="{ minRows: 20 }"
    ></el-input>
    <el-input
      type="text"
      placeholder="请输入文章摘要"
      v-model="article.abstract"
    ></el-input>
    <el-input
      type="text"
      placeholder="请输入文章作者"
      autocomplete="on"
      v-model="article.author"
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
        abstrac: "",
        author: "",
        date: "",
        view: 0,
        group: "",
        comment: 0,
      },
      content: "",
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