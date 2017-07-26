<template>
    <div class="musicList flex">
      <i class="icon-Horn red musicList-horn"></i>
      <div class="musicList-detail">
        <p>
          如果我爱你
          <span>(电视剧《春风十里，不如你》)</span>
        </p>
      </div>
      <i class="icon-List2 musicList-icon"></i>
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
  .musicList{
    height:60px;
    margin-left: 15px;
    border-bottom: 1px solid #DADCDD;
  }
  .musicList-horn{
    font-size: 20px;
  }
  .musicList-detail{
    flex: 1;
    text-align: left;
    margin-left: 10px;

  }
  .musicList-icon{
    height:60px;
    line-height: 60px;
    padding: 0 15px;
    color: #AAABAC;
    font-size: 22px;
  }
</style>
