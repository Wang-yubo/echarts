<template>
  <div class="home">
  <div class="side">
    <ul>
      <li><router-link :to="{name:'index'}">首页</router-link></li>
      <li><router-link :to="{name:'sun'}">日出日落</router-link></li>
      <li><router-link :to="{name:'line1'}">折线图</router-link></li>
      <li><router-link :to="{name:'Pie'}">饼状图</router-link></li>
      <li><router-link :to="{name:'RichText'}">富文本</router-link></li>
      <li><router-link :to="{name:'Sunburst'}">旭日图</router-link></li>
      <li><router-link :to="{name:'PictorialBar'}">象形柱图</router-link></li>
      <li><router-link :to="{name:'Gauge'}">仪表盘</router-link></li>
      <li><router-link :to="{name:'City3d'}">3D城市</router-link></li>
      <li><router-link :to="{name:'Globe3d'}">3D地球</router-link></li>
      <li><router-link :to="{name:'Music'}">3D音频图</router-link></li>
      <li><router-link :to="{name:'Rounded'}">Rounded Bar</router-link></li>
    </ul>

  </div>
  <div class="content">
    <router-view></router-view>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
   
  }
}
</script>

<style lang="less" scoped>
.home{
  display: flex;
  height: 100%;
}
  .side{
    width:240px;
    height: 100%;
    background-color: #2d2d36;
    ul{
      width: 200px;
      margin: 0 auto;
      color: #57697e;
      li{
        height: 52px;
        line-height: 52px;
        text-indent: 3em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 6px;
        a.router-link-active{
          color: orangered;
        }  
          
      }
      li a:hover{
        color: seagreen;
      }
     
    }
  }
  .content{
    width: calc(100vw - 240px);//空格隔开
    height: 700px;
    background-color: #999;
    div{
      width:100%;
      height: 100%;
    }
  }
</style>
