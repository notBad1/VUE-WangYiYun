<template>
  <div id="app">
    <!--头部-->
    <tobBar></tobBar>
    <!--侧边栏-->
    <leftSidebar></leftSidebar>
    <!--我的音乐-->
    <myMusic></myMusic>
    <!--底部-->
    <bootomBar></bootomBar>
    <!--底部菜单-->
    <bottomMenu v-bind:bttomMenus='bttomMenus'></bottomMenu>
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
        bttomMenus: {
          title: '创建的歌单',
          content: [
            {
              name: '创建新歌单',
              icon: 'icon-Add1',
              count: ''
            },
            {
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
