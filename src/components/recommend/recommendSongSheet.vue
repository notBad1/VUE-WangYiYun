<template>
    <div class="recommendSongSheet recommend-content">
      <!--推荐歌单-->
      <div class="recommendSongSheet-header">
        <img :src="boutiqueSongSheet.coverImgUrl" alt="">
        <div class="recommendSongSheet-header-detailed">
          <div class="title">
            <i class="icon-Cloud"></i>
            <span>精品歌单</span>
            <i></i>
          </div>
          <p></p>
          <span></span>
        </div>
      </div>
    </div>
</template>
<script>
  import Vue from 'vue'
  import axios from 'axios'
  Vue.prototype.$http = axios

//  import recommendList from './recommendList.vue'
//  import recommendList1 from './recommendList1.vue'

  export default {
    data () {
      return {
//        精品歌单
        boutiqueSongSheet: {}
      }
    },
//    components: {
//      recommendList: recommendList,
//      recommendList1: recommendList1
//    },
    computed: {
    },
    methods: {
//      获取精品歌单
      fetchBoutique () {
        let self = this
        axios.get('/api/top/playlist/highquality?limit=1').then(function (res) {
          self.boutiqueSongSheet = res.data.playlists[0]
        })
      }
    },
    created () {
      this.fetchBoutique()
    }
  }
</script>
<style>
  .recommendSongSheet-header{
    display: flex;
    height: 100px;
    background-color: #5D5D5E;
    padding: 30px 30px 20px 15px ;
  }
  .recommendSongSheet-header img{
    width:100px;
    height: 100px;
  }
</style>
