<template>
  <div id="app">
    <tobBar></tobBar>
    <myMusicType></myMusicType>
  </div>
</template>

<script>
  import tobBar from './components/tobBar.vue'
  import myMusicType from './components/myMusicType.vue'

  export default {
    components: {
      'tobBar': tobBar,
      'myMusicType': myMusicType
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
