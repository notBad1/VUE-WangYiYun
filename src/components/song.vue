<template>
  <transition name="side">
      <div class="song">
        <div class="song-title flex ">
          <div class="flex">
            <i class="icon-Loop2 song-icon"></i>
            <span> 列表循环</span>
            <span class="songNum"> ( 5 )</span>
          </div>
          <div class="song-titleFun">
            <div class="flex">
              <i class="icon-Add2 song-icon"></i>
              <span>收藏</span>
            </div>
            <div class="line"></div>
            <div class="flex">
              <i class="icon-Delete1 song-icon"></i>
              <span>清空</span>
            </div>
          </div>
        </div>
        <songList songName="刚好遇见你" songSinger="李玉刚" songSelected="song-selected"></songList>
        <songList songName="刚好遇见你" songSinger="李玉刚" songSelected=""></songList>
        <songList songName="刚好遇见你" songSinger="李玉刚" songSelected=""></songList>
      </div>
  </transition>
</template>
<script>
    import songList from './songList.vue'

    export default {
      components: {
        'songList': songList
      }
    }
</script>
<style>
  @import "../assets/css/css.css";
  @import "../../static/font-icon/style.css";
  .song{
    position: fixed;
    bottom: 0;
    left:0;
    right:0;
    height:50%;
    background-color: #fff;
    z-index: 100;
  }
  .song-title{
    height: 50px;
    padding: 0 15px;
    font-size: 14px;
    border-bottom: 1px solid #DBDBDB;
  }
  .song-icon{
    font-size: 20px;
    color: #929292;
    margin-right: 5px;
  }
  .songNum{
    margin-left: 5px;
  }
  .song-titleFun{
    display: flex;
  }
  .line{
    width:1px;
    background-color: #DBDBDB;
    margin: 0 15px;
  }
</style>
