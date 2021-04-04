<template>
  <div class="write">
    <div class="main">
      <el-input
        class="item"
        type="text"
        placeholder="请输入文章标题"
        v-model="article.title"
      ></el-input>
      <el-input
        class="item"
        type="textarea"
        placeholder="请输入文章内容"
        v-model="article.content"
        :autosize="{ minRows: 20 }"
      ></el-input>
    </div>
    <div class="info">
      <el-input
        type="textarea"
        placeholder="请输入文章摘要"
        v-model="article.abstract"
        :autosize="{ minRows: 5 }"
      ></el-input>
      <el-input
        class="item"
        type="url"
        placeholder="请输入封面图片地址"
        v-model="article.cover"
      ></el-input>
      <el-input
        class="item"
        type="group"
        placeholder="请输入分组标签名称"
        v-model="article.group"
      ></el-input>
      <el-date-picker
        v-model="article.date"
        class="item"
        type="date"
        format="yyyy 年 MM 月 dd 日"
        value-format="yyyy-MM-dd"
        placeholder="请选择日期"
        :picker-options="options"
      ></el-date-picker>
      <el-button class="item" @click="handlePostArticle">确认</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: {
        title: "",
        abstract: "",
        date: "",
        view: 0,
        group: "",
        comment: 0,
        cover: "",
        content: "",
      },
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
      if (
        this.article.title !== "" &&
        this.article.content !== "" &&
        this.article.date !== "" &&
        this.article.group !== "" &&
        this.article.cover !== "" &&
        this.article.abstract !== ""
      ) {
        this.$http.post("/back/postArticle", this.article).then((res) => {
          console.log(res);
          if (res.data.msg === "Succeed!") {
            this.$notify({
              title: "成功",
              message: "发布成功！",
              duration: 1000,
              type: "success",
            });
          } else {
            this.$notify({
              title: "失败",
              message: "发布失败！请检查服务器设置！",
              duration: 1500,
              type: "info",
            });
          }
        });
      } else {
        this.$notify({
          title: "失败",
          message: "请完善文章信息！",
          duration: 1500,
          type: "info",
        });
      }
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
.write {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  .main {
    width: 69%;
    display: flex;
    flex-direction: column;
    .item:not(:first-child) {
      margin-top: 24px;
    }
  }
  .info {
    width: 29%;
    display: flex;
    flex-direction: column;
    .item:not(:first-child) {
      margin-top: 16px;
      width: 100%;
    }
  }
}
@media (max-width: 800px) {
  .write {
    flex-direction: column;
    .main {
      width: 100%;
    }
    .info {
      width: 100%;
      margin-top: 36px;
    }
  }
}
</style>