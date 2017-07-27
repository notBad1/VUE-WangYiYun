<template>
    <div class="mymusic">
        <router-link to="/typeDetail">
            <typeList name="本地音乐" icon="icon-Music" count="5"></typeList>
        </router-link>

        <typeList name="最近播放" icon="icon-RecentlyPlayed" count="5"></typeList>
        <typeList name="下载管理" icon="icon-Download" count="5"></typeList>
        <typeList name="我的电台" icon="icon-MusicRadio" count="5"></typeList>
        <typeList name="我的收藏" icon="icon-Collection" count="专辑/歌手/MV/专栏"></typeList>

        <songSheet v-for='(item, index) in items' :typeList='item' :songSheetList="item.detail" :key='index'></songSheet>
    </div>
</template>
<script>
//  我的音乐类型
  import typeList from './typeList.vue'
//  歌单
  import songSheet from './songSheet.vue'
  import store from '../store'

  export default {
    components: {
      'typeList': typeList,
      'songSheet': songSheet
    },
    computed: {
      items () {
        return store.state.songSheet.songSheets
      }
    }
  }
</script>
<style>
  @import "../assets/css/css.css";
  .mymusic{
    position: fixed;
    overflow: auto;
    top: 50px;
    bottom: 50px;
    left: 0;
    right: 0;
    z-index: 9;
  }
</style>
