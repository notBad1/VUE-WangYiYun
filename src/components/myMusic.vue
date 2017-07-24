<template>
    <div class="mymusic">
        <typeList name="本地音乐" icon="icon-Music" count="5"></typeList>
        <typeList name="最近播放" icon="icon-RecentlyPlayed" count="5"></typeList>
        <typeList name="下载管理" icon="icon-Download" count="5"></typeList>
        <typeList name="我的电台" icon="icon-MusicRadio" count="5"></typeList>
        <typeList name="我的收藏" icon="icon-Collection" count="专辑/歌手/MV/专栏"></typeList>

        <songSheet></songSheet>
    </div>
</template>
<script>
//  我的音乐类型
  import typeList from './typeList.vue'
//  歌单
  import songSheet from './songSheet.vue'

  export default {
    components: {
      'typeList': typeList,
      'songSheet': songSheet
    }
  }
</script>
