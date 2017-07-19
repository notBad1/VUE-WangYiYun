<template>
  <div id="app">
    <!--头部-->
    <tobBar></tobBar>
    <!--侧边栏-->
    <leftSidebar v-bind:info='info'></leftSidebar>
    <!--我的音乐-->
    <myMusic></myMusic>
    <!--底部-->
    <bootomBar></bootomBar>
    <!--底部菜单-->
    <bottomMenu></bottomMenu>
  </div>
</template>

<script>
//  头部导航
  import tobBar from './components/tobBar.vue'
//  我的音乐
  import myMusic from './components/myMusic.vue'
//  底部播放器
  import bootomBar from './components/bottomBar.vue'
//  侧边栏
  import leftSidebar from './components/leftSidebar.vue'
// 底部菜单
  import bottomMenu from './components/bottomMenu.vue'
  export default {
    data () {
      return {
        info: {
          srcBg: '../../static/img/003.jpg',
          src: '../../static/img/005.jpeg',
          name: '各种纠结',
          grade: '2'
        }
      }
    },
    components: {
      'tobBar': tobBar,
      'myMusic': myMusic,
      'bootomBar': bootomBar,
      'leftSidebar': leftSidebar,
      'bottomMenu': bottomMenu
    }
  }
</script>

<style>
  body,html{
    margin:0;
    padding:0;
    box-sizing:border-box;
    background:#F2F4F5;
    user-select:none;
    -webkit-tap-highlight-color: transparent;
  }
  *{
    margin:0;
    padding: 0;
  }
  #app {
    font-family: '微软雅黑',Arial;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333;
  }
</style>
