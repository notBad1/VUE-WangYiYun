<template>
    <div class="songSheet">
      <div class="title flex">
        <i class="icon-DownArrow arrow"></i>
        <div class="titleBox">
          <span>创建的歌单</span>
          <span>(1)</span>
        </div>
        <i class="icon-Set setting"></i>
      </div>
    </div>
</template>
<script>
    export default {
//        props: []
    }
</script>
<style>
  @import "../../static/font-icon/style.css";
  @import "../assets/css/css.css";
  .title{
    padding: 0 15px;
    height:35px;
    background-color: #f3f3f3;
    justify-content: flex-start;
    color: #5C5D5D;
  }
  .arrow{
    font-size: 15px;
  }
  .titleBox{
    flex: 1;
    font-size: 13px;
    margin-left: 15px;
  }
  .setting{
    font-size: 20px;
    color: #8B8C8C;
  }
</style>
