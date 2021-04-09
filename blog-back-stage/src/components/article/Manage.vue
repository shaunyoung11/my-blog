<template>
  <div class="manage">
    <el-table fit :data="articles" stripe>
      <el-table-column
        prop="title"
        label="文章标题"
        min-width="200px"
      ></el-table-column>
      <el-table-column
        prop="date"
        label="发布日期"
        min-width="200px"
      ></el-table-column>
      <el-table-column
        prop="group"
        label="文章分类"
        min-width="300px"
      ></el-table-column>
      <el-table-column
        prop="view"
        label="浏览量"
        min-width="200px"
      ></el-table-column>
      <el-table-column label="操作" align="center" min-width="200px">
        <template slot-scope="scope">
          <el-button
            type="primary"
            @click="handleEditArticle(scope)"
            size="small"
            >修改</el-button
          >
          <el-button type="danger" @click="handleDelLink(scope)" size="small"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="pager"
      layout="prev, pager, next"
      :page-size="pageSize"
      :current-page="currentPage"
      :total="total"
      @current-change="getArticles"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [],
      pageSize: 10,
      currentPage: 1,
      total: 0,
    };
  },

  mounted() {
    this.getArticles();
  },

  methods: {
    handleEditArticle(item) {
      console.log(item);
      this.$router.push({
        name: "Write",
        params: {
          article: item.row,
        },
      });
    },
    handleDelLink(item) {
      console.log(item);
      this.$http.post("/back/delArticle", { del: item.row.cid }).then((res) => {
        console.log(res);
        if (res.data.msg === "Succeed!") {
          this.articles.splice(this.articles.indexOf(item.row), 1);
          this.$notify({
            title: "成功",
            message: "删除文章成功",
            duration: 1000,
            type: "success",
          });
        } else {
          this.$notify({
            title: "失败",
            message: "删除文章失败",
            duration: 1500,
            type: "error",
          });
        }
      });
    },
    getArticles(e = 1) {
      console.log(e);
      let current = e;
      this.$http
        .get(`/front/getArticles/all/${current}/${this.pageSize}`)
        .then((res) => {
          console.log(res);
          this.$data.articles = JSON.parse(
            JSON.stringify(res.data.data.articles)
          );
          this.$data.total = res.data.data.count;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.manage {
  display: flex;
  flex-direction: column;
  .pager {
    margin-top: 12px;
    align-self: flex-end;
  }
}
</style>