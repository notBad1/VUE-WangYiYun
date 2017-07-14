<template>
  <div id="app">
    <tobBar></tobBar>
    <myMusic></myMusic>
    <bootomBar></bootomBar>
  </div>
</template>

<script>
//  头部导航
  import tobBar from './components/tobBar.vue'
//  我的音乐
  import myMusic from './components/myMusic.vue'
//  底部播放器
  import bootomBar from './components/bottomBar.vue'

  export default {
    components: {
      'tobBar': tobBar,
      'myMusic': myMusic,
      'bootomBar': bootomBar
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

  #app {
    font-family: '微软雅黑',Arial;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333;
  }
</style>
