<template>
  <div class="user-container">
    <!--在线状态-->
    <UserReceiveState :state="state" :stateChange="stateChange"></UserReceiveState>
    <div class="user-header">
      <el-avatar :size="26" :src="headerImg" class="avatar"></el-avatar>
    </div>
    <div class="user-info">
      <!--用户名称-->
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <span class="name">{{userName}}</span>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import UserReceiveState from '@/components/UserReceiveState.vue'
export default {
  components: {
    UserReceiveState
  },
  data(){
    return {
      userName:"小李客服",
      headerImg:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      state:0
    }
  },
  methods:{
    stateChange(state){
      console.log('状态已经改变，状态代码为'+state);
    },
  }
}
</script>

<style>
  .user-container{
    display: flex;
    flex-direction: row;
  }
  .el-dropdown-link{
    cursor: pointer;
    user-select:none;
  }
  .el-dropdown-link:hover{
    color: #409EFF;
  }
  .user-header{
    margin: 0px 10px;
  }
  .user-info{
    flex: 1;
  }
  .name{
    letter-spacing:2px;
  }
  .user-header .avatar{
    vertical-align: middle;
  }
</style>