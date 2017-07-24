<template>
  <div id="app">
    <!--头部-->
    <tobBar></tobBar>
    <!--侧边栏-->
    <leftSidebar></leftSidebar>
    <!--底部-->
    <bootomBar></bootomBar>
    <!--底部菜单-->
    <bottomMenu v-bind:bttomMenus='bttomMenus'></bottomMenu>
  </div>
</template>

<script>
  import Vue from 'vue'
  import store from './store'
  import axios from 'axios'

  //  头部导航
  import tobBar from './components/tobBar.vue'
  //  底部播放器
  import bootomBar from './components/bottomBar.vue'
  //  侧边栏
  import leftSidebar from './components/leftSidebar.vue'
  // 底部菜单
  import bottomMenu from './components/bottomMenu.vue'

  Vue.use(axios)

  export default {
    data () {
      return {
        bttomMenus: {
          title: '创建的歌单',
          content: [
            {
              id: '0',
              name: '创建新歌单',
              icon: 'icon-Add1',
              count: ''
            },
            {
              id: '1',
              name: '歌单管理',
              icon: 'icon-SongSheet',
              count: ''
            }
          ]
        }
      }
    },
    components: {
      'tobBar': tobBar,
      'bootomBar': bootomBar,
      'leftSidebar': leftSidebar,
      'bottomMenu': bottomMenu
    },
//    实例已经创建完成之后被调用
    created () {
      let songSheetUrl = 'static/songSheet.json'
      axios.get(songSheetUrl)
        .then(function (response) {
          store.dispatch('init_SongSheet', response.data.songSheet)
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
  }
</style>
