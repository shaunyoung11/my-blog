<template>
  <div class="overview">
    <el-form>
      <!-- 站点logo -->
      <el-form-item label="站点 Logo">
        <el-avatar shape="circle" :src="logo"></el-avatar>
        <el-input placeholder="请输入站点logo图片地址" v-model="logoInput">
          <el-button slot="append" @click="handleChangeLogo">修改</el-button>
        </el-input>
      </el-form-item>
      <!-- 站点名称 -->
      <el-form-item label="站点名称">
        <el-input placeholder="请输入站点名称" v-model="name">
          <el-button slot="append" @click="handleChangeName">修改</el-button>
        </el-input>
      </el-form-item>
      <!-- 首页地址 -->
      <el-form-item label="首页地址">
        <el-input placeholder="请输入站点首页地址" v-model="url">
          <el-button slot="append" @click="handleChangeUrl">修改</el-button>
        </el-input>
      </el-form-item>
      <!-- 站点简介 -->
      <el-form-item label="站点简介">
        <el-input placeholder="请输入站点简介" v-model="intro">
          <el-button slot="append" @click="handleChangeIntro">修改</el-button>
        </el-input>
      </el-form-item>
      <!-- 站点备案信息 -->
      <el-form-item label="站点备案信息">
        <el-input placeholder="请输入 icp 备案号" v-model="icp">
          <el-button slot="append">修改</el-button>
        </el-input>
      </el-form-item>
      <!-- github地址 -->
      <el-form-item label="GitHub地址">
        <el-input placeholder="请输入 GitHub 地址" v-model="github">
          <el-button slot="append">修改</el-button>
        </el-input>
      </el-form-item>
      <!-- 邮箱 -->
      <el-form-item label="邮箱地址">
        <el-input placeholder="请输入邮箱地址" v-model="mail">
          <el-button slot="append">修改</el-button>
        </el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logoInput: "",
      logo: "",
      name: "",
      url: "",
      intro: "",
      icp: "",
      github: "",
      mail: "",
    };
  },

  methods: {
    // 处理更换站点logo事件
    handleChangeLogo() {
      console.log(this.$data.logoInput);
      this.$data.logo = this.$data.logoInput;
    },
    // 处理更换站点名称事件
    handleChangeName() {
      console.log(this.$data.name);
    },
    // 处理更改站点首页地址事件
    handleChangeUrl() {},
    // 处理更改站点简介事件
    handleChangeIntro() {
      console.log(this.$data.intro);
    },
  },

  mounted() {
    this.$http.get("/front/getHeader").then((res) => {
      console.log(res);
      let siteInfo = res.data.data.siteInfo[0];
      this.$data.logo = siteInfo.logo;
      this.$data.logoInput = siteInfo.logo;
      this.$data.name = siteInfo.name;
      this.$data.url = siteInfo.url;
      this.$data.intro = siteInfo.intro;
      this.$data.icp = siteInfo.icp;
      this.$data.github = siteInfo.github;
      this.$data.mail = siteInfo.mail;
    });
  },
};
</script>

<style lang="scss" scoped>
</style>