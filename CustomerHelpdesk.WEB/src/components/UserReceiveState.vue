<template>
  <el-dropdown 
    trigger="click"
    @command="handleState">
    <span>
      <span class="state_container" v-if="userState == 0">
        <div class="state online"></div><span>在线</span>
      </span>
      <span class="state_container" v-if="userState == 1">
        <div class="state stop"></div><span>暂停</span>
      </span>
      <span class="state_container" v-if="userState == 2">
        <div class="state ofline"></div><span>下线</span>
      </span>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="0" v-if="userState != 0"><div class="state online"></div>在线</el-dropdown-item>
      <!--在线状态才可暂停-->
      <el-dropdown-item command="1" v-if="userState == 0 && userState != 1"><div class="state stop"></div>暂停</el-dropdown-item>
      <el-dropdown-item command="2" v-if="userState != 2"><div class="state ofline"></div>下线</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  data(){
    return{
      userState:this.state
    }
  },
  methods:{
    handleState(val){
      var self = this;
      self.userState = val;
      if(self.stateChange != null){
        self.stateChange(val); 
      }
    }
  },
  watch:{
    state(val){
      var self = this;
      self.handleState(val);
      self.userState = val;
    }
  },
  props:{
    state:{
      type:Number,
      required:true,
	    default:0
    },
    stateChange:{
      type:Function,
    }
  }
}
</script>

<style>
  .state_container{
    cursor: pointer;
    user-select:none;
  }
  .state_container:hover{
    color: #409EFF;
  }
  .state{
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #000;
    margin: 0px 5px;
  }
  .online{
    background: #67C23A;
  }
  .stop{
    background: #E6A23C;
  }
  .ofline{
    background: #F56C6C;
  }
</style>