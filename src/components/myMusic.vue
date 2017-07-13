<template>
    <div class="Mymusic">
        <myMusicTypeList typeName="本地音乐" icon="icon-Music" Num="5"></myMusicTypeList>
        <myMusicTypeList typeName="最近播放" icon="icon-RecentlyPlayed" Num="5"></myMusicTypeList>
        <myMusicTypeList typeName="下载管理" icon="icon-Download" Num="5"></myMusicTypeList>
        <myMusicTypeList typeName="我的电台" icon="icon-MusicRadio" Num="5"></myMusicTypeList>
        <myMusicTypeList typeName="我的收藏" icon="icon-Collection" Num="专辑/歌手/MV/专栏"></myMusicTypeList>

        <songSheet></songSheet>
    </div>
</template>
<script>
//  我的音乐类型
  import myMusicTypeList from './myMusicTypeList.vue'
  import songSheet from './songSheet.vue'
  export default {
    components: {
      'myMusicTypeList': myMusicTypeList,
      'songSheet': songSheet
    }
  }
</script>
<style>
  .Mymusic{
    margin-top: 50px;
  }
</style>
