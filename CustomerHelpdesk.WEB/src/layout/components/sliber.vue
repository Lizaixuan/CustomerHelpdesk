<template>
  <div class="sliber">
    <div class="logo-container">
      <img src="@/assets/weblogo.png"/>
    </div>
    <div class="menu-scrollbar">
      <el-scrollbar style="height:100%" wrap-style="overflow-x:hidden;">
        <el-menu :default-active="activeId" class="menu" :default-openeds="openeds">
          <el-submenu :index="parent.id.toString()" v-for="(parent,pindex) in menus" :key="pindex">
            <template slot="title">
              <i v-if="parent.icon != null" :class="['fa',parent.icon]"></i>
              <span>{{parent.menuName}}</span>
            </template>
            <el-menu-item-group v-if="parent.children != null && parent.children.length > 0">
              <el-menu-item v-for="(child,cindex) in parent.children" :index="child.id.toString()" :route="child.path" :key="cindex">
                <i v-if="child.icon != null" :class="['fa',child.icon]"></i>
                {{child.menuName}}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import Enumerable from 'linq'
export default {
  methods: {
    showAllMenu(){
      var self = this;
      var allpath = self.getAllMenuPath(self.menus);
      self.openeds = Enumerable.from(allpath).select(i=> i.id).toArray();
    },
    getAllMenuPath(menus,array = []){
      //用递归的方式取出所有菜单的path，如果父菜单使用id代替
      var self = this;
      menus.forEach((item)=>{
        if(item.children != null && item.children.length > 0){
          self.getAllMenuPath(item.children,array);
        }
        array.push({id:item.id.toString(),path:item.path});
      });
      return array;
    },
    activeMenu(path){
      //激活当前路径的菜单
      var self = this;
      var allpath = self.getAllMenuPath(self.menus);
      var menu = Enumerable.from(allpath)
        .where(i=> i.path == path)
        .firstOrDefault();
      if(menu != null){
        self.activeId = menu.id.toString();
      }
    }
  },
  data(){
    return {
      openeds:[],
      activeId:"",
      menus:[
        {
          id:0,
          menuName:"系统",
          icon:"fa-desktop",
          path:"",
          children:[
            {
              id:1,
              menuName:"控制台",
              icon:"fa-tachometer",
              path:"/index"
            },
          ]
        },
        {
          id:2,
          menuName:"客服中心",
          icon:"fa-user-circle",
          path:"",
          children:[
            {
              id:3,
              menuName:"客户会话",
              icon:"fa-commenting-o",
              path:"/CustomerService/MessageList",
            },
          ]
        }
      ]
    }
  },
  created(){
    var self = this;
    self.showAllMenu();
    self.activeMenu(this.$route.path);
  }
}
</script>

<style>
  .menu{
    border-right:none;
    padding: 50px 0px;
  }
  .logo-container{
    height: 60px;
    padding: 0px 10px;
  }
  .logo-container img{
    width: 100%;
  }
  .sliber{
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: stretch;
    align-content: stretch;
  }
  .menu-scrollbar{
    display: block;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    overflow: auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .el-menu-item-group__title{
    padding: 0px;
  }
</style>