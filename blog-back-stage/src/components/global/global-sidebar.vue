<template>
  <el-menu router unique-opened>
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
    };
  },
};
</script>
<style lang="scss" scoped>
</style>