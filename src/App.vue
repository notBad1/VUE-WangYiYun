<template>
  <div id="app">
    <tobBar></tobBar>
    <myMusic></myMusic>
  </div>
</template>

<script>
  import tobBar from './components/tobBar.vue'
  import myMusic from './components/myMusic.vue'

  export default {
    components: {
      'tobBar': tobBar,
      'myMusic': myMusic
    }
  }
</script>

<style>
  body{
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: '微软雅黑',Arial;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333;
  }
</style>
