<template>
  <div class="typeDetail">
    <div class="typeDetail-header flex">
      <i class="icon-Return white"></i>
      <span class="typeDetail-title">本地音乐</span>
      <i class="icon-Search white typeDetail-search"></i>
      <i class="icon-List2 white"></i>
    </div>
    <ul class="typeDetail-nav flex">
      <router-link to="/typeDetail/localMusicSingle" class="flex1">
        <li class="typeDetail-navTitle">单曲</li>
      </router-link>
      <router-link to="/typeDetail/localMusicSinger" class="flex1">
        <li class="typeDetail-navTitle">歌手</li>
      </router-link>
      <router-link to="/typeDetail/localMusicAlbum" class="flex1">
        <li class="typeDetail-navTitle">专辑</li>
      </router-link>
      <router-link to="/typeDetail/localMusicFolder" class="flex1">
        <li class="typeDetail-navTitle">文件夹</li>
      </router-link>
    </ul>

    <router-view></router-view>
  </div>
</template>
<script>
//  import store from '../store'

  export default {
//    computed: {
//    },
//    methods: {
//    }
  }
</script>
<style>
  @import "../assets/css/css.css";
  @import "../../static/font-icon/style.css";

  .typeDetail {
    position: fixed;
    top: 0;
    bottom: 50px;
    left: 0;
    right: 0;
    background-color: #F2F4F5;
    z-index: 150;
  }

  .typeDetail-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    background-color: #D33A31;
    padding: 0 15px;
  }

  .typeDetail-title{
    flex:1;
    text-align: left;
    margin-left: 20px;
    color: #fff;
    font-size: 18px;
  }

  .typeDetail-search{
    margin-right: 30px;
  }

  .typeDetail-nav{
    position: fixed;
    top:50px;
    left: 0;
    right: 0;
    height: 40px;
    background-color: #fff;
    text-align: center;
    list-style: none;
  }

  .typeDetail-navTitle{
    height:38px;
    line-height: 38px;
    border-bottom: 2px solid #fff;
  }

  .router-link-active .typeDetail-navTitle{
    color: #D33A31;
    border-bottom-color: #D33A31;
  }
</style>
