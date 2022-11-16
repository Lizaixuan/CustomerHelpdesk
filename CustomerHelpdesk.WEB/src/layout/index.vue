<template>
  <el-container class="container">
    <el-aside style="width:250px" class="aside">
      <Sliber></Sliber>
    </el-aside>
    <el-container class="main-container">
        <div class="header">
          <div class="breadcrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb-group">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>客服中心</el-breadcrumb-item>
              <el-breadcrumb-item>会话</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <User></User>
        </div>
        <el-main class="main">
          <el-scrollbar style="height:100%" wrap-style="overflow-x:aotu;">
            <router-view></router-view>
          </el-scrollbar>
        </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Sliber from './components/sliber.vue'
import Header from './components/header.vue'
import User from '@/components/User.vue'

export default {
  components: {
    Sliber,
    Header,
    User,
  }
}
</script>

<style scoped>
  .container{
    height: 100%;
  }
  .main-container{
    flex-direction: column;
  }
  .header{
    background: #fff;
    padding: 0px 24px;
    border-bottom: 1px #DCDFE6 solid;
    display: flex;
    height: 60px;
    line-height: 60px;
  }
  .main{
    background: rgb(240,242,245);
    padding: 0px;
  }
  .aside{
    border-right: 1px #DCDFE6 solid;
  }
  .breadcrumb{
    flex: 1;
  }
  .breadcrumb-group{
    height: 60px;
    line-height: 60px;
  }
</style>