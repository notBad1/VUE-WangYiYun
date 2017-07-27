<template>
  <div class="localMusicSingle">
    <div class="single-header flex">
      <i class="icon-Play4 single-playAll"></i>
      <p class="sigle-title">播放全部 <span>(共35首)</span></p>
      <div class="single-Multiselect">
        <i class="icon-Multiselect"></i>
        <span>多选</span>
      </div>
    </div>
    <musicList v-for="(item, index) in items" :key="index" :item="item"></musicList>
  </div>
</template>
<script>
  import musicList from './musicList.vue'
  import store from '../store'

  export default {
    components: {
      'musicList': musicList
    },
    computed: {
      items () {
        return store.state.audio.localMusic
      }
    }
  }
</script>
<style>
  @import "../assets/css/css.css";
  @import "../../static/font-icon/style.css";

  .localMusicSingle {
    position: fixed;
    top: 90px;
    bottom: 50px;
    border-bottom: 50px;
    left: 0;
    right: 0;
    overflow: auto;
  }

  .single-header {
    height: 60px;
    border-bottom: 1px solid #DADCDD;
  }

  .single-playAll {
    padding: 0 15px;
    font-size: 20px;
  }

  .sigle-title {
    flex: 1;
    text-align: left;
  }

  .sigle-title > span {
    color: #919293;
  }

  .single-Multiselect {
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 13px;
    padding-right: 10px;
  }

  .single-Multiselect > i {
    font-size: 18px;
    margin-right: 5px;
  }
</style>
