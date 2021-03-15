<template>
  <div class="overview">
    <el-form>
      <!-- 站点logo -->
      <el-form-item label="站点图片">
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
      <!-- 站点简介 -->
      <el-form-item label="站点简介">
        <el-input placeholder="请输入站点简介" v-model="intro">
          <el-button slot="append" @click="handleChangeIntro">修改</el-button>
        </el-input>
      </el-form-item>
      <!-- 站点备案信息 -->
      <el-form-item label="站点备案信息">
        <el-input placeholder="请输入 icp 备案号">
          <el-button slot="append">修改</el-button>
        </el-input>
      </el-form-item>
      <!-- github地址 -->
      <el-form-item label="GitHub地址">
        <el-input placeholder="请输入 GitHub 地址">
          <el-button slot="append">修改</el-button>
        </el-input>
      </el-form-item>
      <!-- 邮箱 -->
      <el-form-item label="邮箱地址">
        <el-input placeholder="请输入邮箱地址">
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
    // 处理更改站点简介事件
    handleChangeIntro() {
      console.log(this.$data.intro);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>