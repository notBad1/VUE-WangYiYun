<template>
    <div class="bottomBar flex">
      <img class="musicImg" src="../assets/image/006.jpg" alt="">
      <div class="detail">
        <span>刚好遇见你</span>
        <span class="singer">李玉刚</span>
        <span class="prompt">横滑可以切换上下首哦</span>
      </div>
      <i class="icon-Play3 play"></i>
      <i class="icon-PlayList"></i>
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
  .bottomBar{
    position: fixed;
    bottom: 0;
    left: 0;
    right:0;
    height: 50px;
    margin-top: 50px;
    background-color: #fff;
    padding: 0 15px 0 5px;
    justify-content: space-around;
    z-index: 1;
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
