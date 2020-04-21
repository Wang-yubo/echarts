<template>
  <div id="app">
    <div class="header">
      <ul>
        <li><a href="javascript:;">Home</a></li>
        <li><a href="javascript:;">登录</a></li>
        <li><a href="javascript:;">注册</a></li>
        <li><a href="javascript:;">用户</a></li>
      </ul>
    </div>

  <div class="main">
    <router-view></router-view>



  </div>

  </div>
</template>

<style lang="less" scoped >
    .header{
      height:60px;
      background-color: #151c31;
      box-shadow: 0 1px 2px #999;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      ul{
        display: flex;
        color:#57697e;
        li{
          width: 60px;
          height: 26px;
          line-height: 26px;
          text-align: center;
          border: 1px solid rgba(255,255,255,.3);
          margin-right: 16px;
        }
      }
    }
</style>


<script>
import "@/assets/css/public.css"
export default {
 name:"App",
 components:""
}
</script>
