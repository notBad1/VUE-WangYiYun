<template>
    <div class="musicList flex">
      <i class="icon-Horn red musicList-horn"></i>
      <div class="musicList-detail">
        <div class="musicList-songname">
          <p>{{item.name}}<span>(电视剧《春风十里，不如你》)</span></p>
          <i class="icon-MV musicList-mv"></i>
        </div>
        <p class="musicList-songster">
          <i class="icon-Correct musicList-correct"></i>
          <span>{{item.singer}} - 如果我爱你</span>
        </p>
      </div>
      <i class="icon-List2 musicList-icon"></i>
    </div>
</template>
<script>
  export default {
    props: {
      item: {
        type: Object
      }
    }
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

  .musicList-songname{
    display: flex;
    align-items: center;
  }
  .musicList-songname p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .musicList-songname span{
    color: #919293;
    margin-left: 5px;
  }
  .musicList-mv{
    margin-left: 5px;
  }

  .musicList-songster{
    display: flex;
    align-items: center;
    margin-top: 5px;
    font-size: 14px;
    color: #797A7B;
  }
  .musicList-correct{
    font-size: 18px;
    color: #5AB5E7;
    margin-right: 8px;
  }
</style>
