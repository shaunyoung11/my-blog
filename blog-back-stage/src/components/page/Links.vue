<template>
  <div class="links">
    <el-table fit :data="link" stripe>
      <el-table-column prop="name" label="友链名称">
        <template slot-scope="scope">
          <el-input v-model="scope.row.name"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="url" label="友链地址">
        <template slot-scope="scope">
          <el-input v-model="scope.row.url"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="title" label="友链简介">
        <template slot-scope="scope">
          <el-input v-model="scope.row.title"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="logo" label="友链头像">
        <template slot-scope="scope">
          <el-input v-model="scope.row.logo">
            <el-avatar
              size="small"
              slot="append"
              :src="scope.row.logo"
              shape="square"
            ></el-avatar>
          </el-input>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            v-if="scope.row._id"
            type="primary"
            @click="handleChangeLink(scope)"
            size="small"
            >修改</el-button
          >
          <el-button
            v-else
            type="primary"
            @click="handleAddLink(scope)"
            size="small"
            >确定</el-button
          >
          <el-button type="danger" @click="handleDelLink(scope)" size="small"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-button
      circle
      icon="el-icon-plus"
      @click="handleAddLinkItem"
    ></el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      link: [],
      newLink: {
        name: "",
        logo: "",
        title: "",
        url: "",
      },
    };
  },
  mounted() {
    this.handleGetLink();
  },
  methods: {
    // 处理获取友链列表事件
    handleGetLink() {
      this.$http.get("/front/getLink").then((res) => {
        console.log(res);
        this.$data.link = res.data.data.link;
      });
    },
    // 处理修改链接事件
    handleChangeLink(item) {
      console.log(item);
      this.$http.post("/back/changeLink", {
        method: "update",
        link: item.row,
      });
    },
    // 处理删除链接事件
    handleDelLink(item) {
      this.$data.link.splice(item.$index, 1);
      if (item.row._id) {
        this.$http.post("/back/changeLink", {
          method: "del",
          link: item.row,
        });
      }
    },
    handleAddLinkItem() {
      let addLink = JSON.parse(JSON.stringify(this.newLink));
      this.$data.link.push(addLink);
    },
    handleAddLink(item) {
      if (item.row.name && item.row.url && item.row.title && item.row.logo) {
        this.$http
          .post("/back/changeLink", {
            method: "add",
            link: item.row,
          })
          .then((res) => {
            if (res.data.msg === "Succeed!") {
              this.$notify({
                title: "成功",
                message: "成功添加新的友链！",
                duration: 1000,
                type: "success",
              });
              this.handleGetLink();
            } else {
              this.$notify({
                title: "失败",
                message: "添加友链失败！",
                duration: 1500,
                type: "info",
              });
            }
          });
      } else {
        this.$notify({
          title: "错误",
          message: "添加友链失败，请完善友链信息！",
          duration: 1500,
          type: "error",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>