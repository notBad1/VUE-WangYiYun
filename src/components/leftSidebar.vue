<template>
  <div class="leftSidebar">
    <transition name="fade">
      <div class="mask"></div>
    </transition>

    <transition name="side">
      <div class="sidebar">
        <div class="sidebar-wrapper">
          <div class="sidebar-header">
            <img class="head" src="../assets/image/005.jpeg" alt="头像">
            <div class="userinfo flex">
              <div class="user">
                <span>各种纠结</span>
                <span class="grade">Lv.1</span>
              </div>
              <div class="sign">
                <i class="icon-Sign"></i>
                签到
              </div>
            </div>
          </div>
          <div class="siderbar-list">
            <sidebarList></sidebarList>
          </div>
          <div class="sidebar-fotter">

          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
    import sidebarList from './sidebarList.vue'
    export default {
      components: {
        'sidebarList': sidebarList
      }
    }
</script>
<style>
  @import "../assets/css/css.css";
  @import "../../static/font-icon/style.css";
  .sidebar{
    position: fixed;
    left:0;
    top:0;
    bottom: 0;
    overflow-y: auto;
    width:298px;
    background-color: #fff;
    z-index: 100;
  }
  .sidebar-header{
    position: relative;
    width:100%;
    height:168px;
    background: url("../assets/image/007.jpg") no-repeat center;
    background-size:100%;
  }
  .head{
    position: absolute;
    bottom: 50px;
    left: 15px;
    width:56px;
    height: 56px;
    border-radius: 28px;
  }
  .userinfo{
    position: absolute;
    bottom: 20px;
    left:15px;
    height:20px;
    font-size: 14px;
    color: #fff;
  }
  .user{
    flex: 1;
  }
  .grade{
    flex: 1;
    display: inline-block;
    padding: 0 5px;
    border:1px solid #fff;
    border-radius: 10px;
    font-size: 10px;
    font-style:italic
  }
</style>
