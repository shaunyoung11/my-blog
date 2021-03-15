<template>
  <el-menu router>
    <el-submenu>
      <template slot="title">
        <i class="el-icon-document"></i>
        <span>文章管理</span>
      </template>
      <el-menu-item index="/write">
        <template slot="title">
          <i class="el-icon-edit"></i>
          <span>撰写文章</span>
        </template>
      </el-menu-item>
      <el-menu-item index="/manage">管理文章</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.menu {
}
</style>