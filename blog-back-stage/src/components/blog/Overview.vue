<template>
  <div class="overview">
    <el-form>
      <el-form-item label="站点图片">
        <el-avatar shape="circle" :src="logo"></el-avatar>
        <el-input v-model="logoInput"></el-input>
        <el-button @click="handleChangeLogo">修改</el-button>
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
    handleChangeLogo() {
      console.log(this.$data.logoInput);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>