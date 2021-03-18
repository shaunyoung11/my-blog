<template>
  <div class="login">
    <h1>登录到博客后台</h1>
    <div class="box">
      <el-avatar :size="80">Blog</el-avatar>
      <el-input
        label="用户名"
        type="text"
        placeholder="请输入用户名"
        v-model="username"
        clearable
      ></el-input>
      <el-input
        label="密码"
        type="password"
        placeholder="请输入密码"
        v-model="password"
        clearable
      ></el-input>
      <el-button @click="handleClickLogin">登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    handleClickLogin() {
      console.log("login clicked");
      this.$http
        .post("/back/login", {
          username: this.username,
          password: this.password,
        })
        .then((res) => {
          if (res.data.msg === "Succeed!") {
            window.sessionStorage.setItem("uat", res.data.data.uat);
            this.$router.push("/home");
            this.$notify({
              title: "成功",
              message: "登录成功！",
              type: "success",
              duration: 1000,
            });
          } else {
            this.$notify({
              title: "失败",
              message: "登录失败！",
              type: "error",
              duration: 1500,
            });
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  h1 {
    margin-top: -100px;
  }
  .box {
    width: 30%;
    height: 40%;
    background-color: #fff;
    border-radius: 25px;
    padding: 0 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .el-avatar--80 {
      width: 80px;
      height: 80px;
      transform: translateY(-50%);
    }
  }
}
</style>