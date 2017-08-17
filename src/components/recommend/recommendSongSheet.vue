<template>
    <div class="recommendSongSheet recommend-content">
      <!--推荐歌单-->
      <div class="recommendSongSheet-header">
        <img :src="boutiqueSongSheet.coverImgUrl" alt="">
        <div class="recommendSongSheet-detailed">
          <div class="recommendSongSheet-detailed-title">
            <div class="anCrown"><i class="icon-AnCrown"></i></div>
            <span>精品歌单</span>
            <i class="icon-RightArrow"></i>
          </div>
          <p>{{boutiqueSongSheet.name}}</p>
          <span>{{boutiqueSongSheet.copywriter}}</span>
        </div>
      </div>
      <div class="recommendSongSheet-nav">
        <div class="recommendSongSheet-select">
          <span>全部歌单</span>
          <i class="icon-RightArrow"></i>
        </div>
        <div class="recommendSongSheet-navBar">
          <span>华语</span>
          <b>|</b>
          <span>轻音乐</span>
          <b>|</b>
          <span>摇滚</span>
        </div>
      </div>

      <songSheetList v-bind:items='allSongSheet'></songSheetList>

    </div>
</template>
<script>
  import Vue from 'vue'
  import axios from 'axios'
  Vue.prototype.$http = axios

  import songSheetList from './songSheetList.vue'

  export default {
    data () {
      return {
//        精品歌单
        boutiqueSongSheet: {},
        allSongSheet: []
      }
    },
    components: {
      songSheetList: songSheetList
    },
    computed: {
    },
    methods: {
//      获取精品歌单
      fetchBoutique () {
        let self = this
        axios.get('/api/top/playlist/highquality?limit=1').then(function (res) {
          self.boutiqueSongSheet = res.data.playlists[0]
        })
      },
//      获取全部歌单
      fetchAll () {
        let self = this
        axios.get('/api/top/playlist?order=hot').then(function (res) {
          console.log(res.data)
          self.allSongSheet = res.data.playlists
        })
      }
    },
    created () {
      this.fetchBoutique()
      this.fetchAll()
    }
  }
</script>
<style>
  .recommendSongSheet-header{
    display: flex;
    height: 150px;
    background-color: #5D5D5E;
  }
  .recommendSongSheet-header img{
    width:100px;
    height: 100px;
    margin: 30px 10px 0 10px;

    flex-shrink:0;
  }
  .recommendSongSheet-detailed{
    flex: 1;
    color: #ffffff;
    margin-top:30px;
    overflow: hidden;
    padding-right: 25px;
  }
  .recommendSongSheet-detailed-title{
    height: 30px;
    display: flex;
    align-items: flex-end;
    color: #ffffff;
    font-size: 16px;
  }
  .recommendSongSheet-detailed .anCrown{
    width:20px;
    height: 20px;
    border:1px solid #E7AA5A;
    border-radius: 50%;
    background-color: rgba(231, 170, 90, .2);
    margin-right: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .recommendSongSheet-detailed .anCrown i{
    font-size: 12px;
    color: #E7AA5A;
  }
  .recommendSongSheet-detailed-title i.icon-RightArrow{
    color: #A2A2A2;
    font-size: 19px;
    margin-left: 3px;
  }
  .recommendSongSheet-detailed>p{
    margin-top: 13px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .recommendSongSheet-detailed>span{
    font-size: 12px;
    color: #A6A6A7;
  }
  .recommendSongSheet-nav{
    width:100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .recommendSongSheet-select{
    margin-left: 10px;
    padding: 5px 12px;
    border:1px solid #CED0D0;
    border-radius: 15px;

    display: flex;
    align-items: center;
  }
  .recommendSongSheet-select i{
    color: #919293;
    font-size: 14px;
    margin-left: 5px;
  }
  .recommendSongSheet-navBar{
    margin-right: 10px;
  }
  .recommendSongSheet-navBar span{
    display: inline-block;
    padding: 2px 3px;
    border-radius: 2px;

  }
  .recommendSongSheet-navBar b{
    color: #DADCDD;
    display: inline-block;
    margin: 0 5px;
    font-weight: 400;
  }
</style>
