<template>
    <div class="single">
      <div class="single-header flex">
        <i class="icon-Play4 single-playAll"></i>
        <p class="sigle-title">播放全部 <span>(共35首)</span></p>
        <div class="single-Multiselect">
          <i class="icon-Multiselect"></i>
          <span>多选</span>
        </div>
      </div>
      <musicList></musicList>
    </div>
</template>
<script>
    import musicList from './musicList.vue'

    export default {
      components: {
        'musicList': musicList
      }
    }
</script>
<style>
  @import "../assets/css/css.css";
  @import "../../static/font-icon/style.css";
  .single-header{
    height: 60px;
    border-bottom: 1px solid #DADCDD;
  }

  .single-playAll{
    padding: 0 15px;
    font-size: 20px;
  }

  .sigle-title{
    flex: 1;
    text-align: left;
  }
  .sigle-title> span{
    color: #919293;
  }

  .single-Multiselect{
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 13px;
    padding-right: 10px;
  }
  .single-Multiselect>i{
    font-size: 18px;
    margin-right: 5px;
  }
</style>
