<template>
  <div id="app">
    <router-view></router-view>
    <!--头部-->
    <!--<tobBar></tobBar>-->
    <!--侧边栏-->
    <leftSidebar></leftSidebar>
    <!--底部-->
    <bootomBar></bootomBar>
    <!--底部菜单-->
    <bottomMenu></bottomMenu>
  </div>
</template>

<script>
  import Vue from 'vue'
  import store from './store'
  import axios from 'axios'

  //  头部导航
  //  import tobBar from './components/tobBar.vue'
  //  底部播放器
  import bootomBar from './components/bottomBar.vue'
  //  侧边栏
  import leftSidebar from './components/leftSidebar.vue'
  // 底部菜单
  import bottomMenu from './components/bottomMenu.vue'

  //  Vue.use(axios)
  Vue.prototype.$http = axios

  export default {
    components: {
//      'tobBar': tobBar,
      'bootomBar': bootomBar,
      'leftSidebar': leftSidebar,
      'bottomMenu': bottomMenu
    },
//    实例已经创建完成之后被调用
    created () {
//      获取歌单数据
      let songSheetUrl = 'static/songSheet.json'
      axios.get(songSheetUrl)
        .then(function (response) {
          store.dispatch('init_SongSheet', response.data.songSheet)
        })
        .catch(function (error) {
          console.log(error)
        })
//      获取本地音乐
      let localMusicUrl = 'static/localMusic.json'
      axios.get(localMusicUrl)
        .then(function (response) {
          store.dispatch('init_LocalMusic', response.data.localMusic)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
</script>

<style>
  body, html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #F2F4F5;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  * {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: '微软雅黑', Arial;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333;
    font-size: 16px;
  }
</style>
