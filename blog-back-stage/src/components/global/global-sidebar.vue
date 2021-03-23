<template>
  <el-menu
    router
    unique-opened
    :default-active="$route.path"
    :collapse="isCollapse"
    :collapse-transition="false"
  >
    <el-button circle class="fold-btn" @click="isCollapse = !isCollapse">
      <template>
        <i class="el-icon-d-arrow-right" v-if="isCollapse === true"></i>
        <i class="el-icon-d-arrow-left" v-else></i>
      </template>
    </el-button>
    <el-submenu v-for="item in menuList" :key="item.title" :index="item.title">
      <template slot="title">
        <i :class="item.icon"></i>
        <span>{{ item.title }}</span>
      </template>
      <el-menu-item
        v-for="child in item.children"
        :key="child.title"
        :index="child.index"
      >
        <template slot="title">
          <i :class="child.icon"></i>
          <span>{{ child.title }}</span>
        </template>
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      // 菜单列表渲染项
      menuList: [
        {
          icon: "el-icon-menu",
          title: "博客信息",
          children: [
            {
              title: "信息概览",
              icon: "el-icon-view",
              index: "/overview",
            },
          ],
        },
        {
          icon: "el-icon-document",
          title: "文章管理",
          children: [
            {
              title: "撰写文章",
              icon: "el-icon-edit",
              index: "/write",
            },
            {
              title: "管理文章",
              icon: "el-icon-document-checked",
              index: "/manage",
            },
          ],
        },
        {
          icon: "el-icon-notebook-1",
          title: "独立页面",
          children: [
            {
              title: "友链",
              icon: "el-icon-paperclip",
              index: "/links",
            },
            {
              title: "关于我",
              icon: "el-icon-user",
              index: "/about",
            },
          ],
        },
      ],
      isCollapse: true,
    };
  },
};
</script>
<style lang="scss" scoped>
.fold-btn {
  transform: translateX(-50%);
  left: 50%;
  position: relative;
}
.el-menu:not(.el-menu--collapse) {
  min-width: 240px;
}
</style>