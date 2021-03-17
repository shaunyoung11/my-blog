<template>
  <div class="about">
    <el-input
      type="textarea"
      v-model="about"
      :autosize="{ minRows: 20 }"
    ></el-input>
    <el-button @click="handleSubmitAbout">确认</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      about: "",
    };
  },
  methods: {
    handleSubmitAbout() {
      console.log(this.about);
    },
  },
};
</script>
<style lang="scss" scoped>
</style>