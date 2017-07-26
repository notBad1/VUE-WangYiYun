<template>
  <div class="musicDetail">
    <div class="musicDetail-header flex">
      <i class="icon-Return white"></i>
      <span class="musicDetail-title">本地音乐</span>
      <i class="icon-Search white musicDetail-search"></i>
      <i class="icon-List2 white"></i>
    </div>
    <div class="musicDetail-nav flex">
      <router-link to="/musicDetail/localMusicSingle" class="flex1">
        <span>单曲</span>
      </router-link>
      <router-link to="/musicDetail/localMusicSinger" class="flex1">
        <span>歌手</span>
      </router-link>
      <router-link to="/musicDetail/localMusicAlbum" class="flex1">
        <span>专辑</span>
      </router-link>
      <router-link to="/musicDetail/localMusicFolder" class="flex1">
        <span>文件夹</span>
      </router-link>
    </div>

    <router-view class="musicDetail-content"></router-view>
  </div>
</template>
<script>
  export default {
//        props: []
  }
</script>
<style>
  @import "../assets/css/css.css";
  @import "../../static/font-icon/style.css";

  .musicDetail {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #F2F4F5;
    z-index: 150;
  }

  .musicDetail-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    background-color: #D33A31;
    padding: 0 15px;
  }

  .musicDetail-title{
    flex:1;
    text-align: left;
    margin-left: 20px;
    color: #fff;
    font-size: 18px;
  }

  .musicDetail-search{
    margin-right: 30px;
  }

  .musicDetail-nav{
    position: fixed;
    top:50px;
    left: 0;
    right: 0;
    height: 38px;
    background-color: #fff;
    text-align: center;
    border-bottom: 2px solid #fff;
  }

  .musicDetail-content{
    position: fixed;
    top:90px;
    bottom: 50px;
    left:0;
    right:0;
    overflow: auto;
  }

  .router-link-active{
    color: #D33A31;
  }
</style>
