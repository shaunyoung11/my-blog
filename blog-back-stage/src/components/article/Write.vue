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
    <el-input
      type="url"
      placeholder="请输入封面图片地址"
      v-model="article.cover"
    ></el-input>
    <el-input
      type="group"
      placeholder="请输入分组标签名称"
      v-model="article.group"
    ></el-input>
    <el-date-picker
      v-model="article.date"
      type="date"
      format="yyyy 年 MM 月 dd 日"
      value-format="yyyy-MM-dd"
      placeholder="请选择日期"
      :picker-options="options"
    ></el-date-picker>
    <el-button @click="handlePostArticle">确认</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: {
        title: "",
        abstract: "",
        author: "",
        date: "",
        view: 0,
        group: "",
        comment: 0,
        cover: "",
      },
      content: "",
      options: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
    };
  },
  methods: {
    handlePostArticle() {
      console.log(this.article);
    },
  },
  mounted() {
    if (this.$props && this.$props.cid) {
      this.$http.get("/front/getPost").then((res) => {
        console.log(res);
      });
    }
  },
};
</script>

<style lang="scss" scoped>
</style>