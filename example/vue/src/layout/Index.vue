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
          <template slot="title"><i class="el-icon-menu"></i>第一课</template>
          <el-menu-item index="/cart">cart</el-menu-item>
          <el-menu-item index="/ele">elementui</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>第二课</template>
          <el-menu-item index="/vr/Robin">router</el-menu-item>
          <el-menu-item index="/vx">vuex</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown @command="goAbout">
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>关于</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span class="user" @click="goHome">Robin</span>
      </el-header>
      
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: 'layout',
    methods: {
      goHome() {
        this.$router.push({ path: '/' })
      },
      goAbout() {
        this.$router.push({ path: '/about' })
      }
    }
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
  .user {
    cursor: pointer;
  }
}
</style>