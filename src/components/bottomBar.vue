<template>
    <div class="bottomBar flex">
      <img class="musicImg" src="../../static/img/006.jpg" alt="">
      <div class="flex1">
        <span>刚好遇见你</span>
        <span class="singer">李玉刚</span>
        <span class="prompt">横滑可以切换上下首哦</span>
      </div>
      <i class="icon-Play3 play"></i>
      <i class="icon-PlayList" @click="showSong"></i>
      <!--遮罩层-->
      <transition name="fade">
        <div v-show="isShowSong" class="mask" @click = "hiddenSong"></div>
      </transition>
      <!--歌曲列表-->
      <Song v-show="isShowSong"></Song>
    </div>
</template>
<script>
    import Song from './song.vue'
    import store from '../store'

    export default {
      methods: {
        showSong () {
          store.dispatch('showSongList')
        },
        hiddenSong () {
          store.dispatch('hideSongList')
        }
      },
      components: {
        'Song': Song
      },
      computed: {
        // 显示
        isShowSong () {
          return store.state.songList.isShowSongList
        }
      }
    }
</script>
<style>
  @import "../assets/css/css.css";
  @import "../../static/font-icon/style.css";
  .bottomBar{
    position: fixed;
    bottom: 0;
    left: 0;
    right:0;
    height: 50px;
    background-color: #fff;
    padding: 0 15px 0 5px;
    justify-content: space-around;
    z-index: 200;
  }
  .musicImg{
    width:40px;
    height:40px;
    margin-right: 10px;
  }
  .singer, .prompt{
    display: block;
    font-size: 12px;
    color: #808080;
    margin-top: 5px;
  }
  .prompt{
    display: none;
  }
  .play{
    margin-right: 25px;
  }
</style>
