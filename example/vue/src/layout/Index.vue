<template>
  <el-container class="layout">
    <el-aside width="150px" class="aside">
      <el-menu
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
      >
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>第一课</template>
          <el-menu-item index="/cart">cart</el-menu-item>
          <el-menu-item index="/ele">elementui</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>第二课</template>
          <el-menu-item index="/about">router</el-menu-item>
          <el-menu-item index="/home">vuex</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-setting"></i>导航三</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="3-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="3-4">
            <template slot="title">选项4</template>
            <el-menu-item index="3-4-1">选项4-1</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-aside>
    
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>Robin</span>
      </el-header>
      
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: 'layout'
  }
</script>
<style lang="scss">
.el-menu {
  border: none !important;
  .el-menu-item {
    min-width: 150px !important;
    padding: 0 !important;
  }
  .el-submenu__title {
    padding: 0px !important;
  }
} 
</style>
<style lang="scss" scoped>
.layout {
  height: calc(100vh);
  .aside {
    background-color: #545c64;
    border: none;
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
}
</style>