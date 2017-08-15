<template>
  <div class="recommendation recommend-content">
    <!--个性推荐-->
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(banner, index) in banners" v-bind:key="index">
        <a v-bind:href="banner.url"><img v-bind:src="banner.pic" alt="banner.typeTitle"></a>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <ul class="recommend-list">
      <li>
        <img src="../../../static/img/fm.png" alt="">
        <p>私人FM</p>
      </li>
      <li>
        <img src="../../../static/img/meiridanqu.png" alt="">
        <p>每日歌曲推荐</p>
      </li>
      <li>
        <img src="../../../static/img/paihangbang.png" alt="">
        <p>云音乐热歌榜</p>
      </li>
    </ul>

    <recommendList title="推荐歌单" v-bind:items='recommendSongSheet' ></recommendList>
    <recommendList title="独家放送" v-bind:items='recommendSole' ></recommendList>
    <recommendList1 title="推荐MV" v-bind:items='recommendMv' ></recommendList1>
    <recommendList title="主播电台" v-bind:items='recommendRadioAnchor'></recommendList>

    <!--底部-->
    <div class="recommend-foot">
      <p>现在可以根据个人喜好，自由调整栏目顺序啦～</p>
      <a href="#">调整栏目顺序</a>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import axios from 'axios'
  Vue.prototype.$http = axios

  import recommendList from './recommendList.vue'
  import recommendList1 from './recommendList1.vue'

  export default {
    data () {
      return {
//        滑块插件
        swiperOption: {
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，
          // 组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，
          // 假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          // 自动切换的时间间隔
          autoplay: 5000,
          grabCursor: true,
          setWrapperSize: true,
          pagination: '.swiper-pagination',
          mousewheelControl: true,
//          循环
          loop: true
        },
//        广告图片
        banners: [],
        recommendSongSheet: [],
        recommendSole: [],
        recommendMv: [],
        recommendRadioAnchor: []
      }
    },
    components: {
      swiper,
      swiperSlide,
      recommendList: recommendList,
      recommendList1: recommendList1
    },
    // 如果你需要得到当前的swiper对象来做一些事情，
    // 你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
    computed: {
      swiper () {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted () {
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      // console.log('this is current swiper instance object', this.swiper)
      // this.swiper.slideTo(3, 1000, false)
    },
    methods: {
//      获取banner图片
      fetchBanner () {
        let self = this
        axios.get('/api/banner').then(function (res) {
          self.banners = res.data.banners
        })
      },
//      获取推荐歌单
      fetchRecommendSongSheet () {
        let self = this
        axios.get('/api/personalized').then(function (res) {
          self.recommendSongSheet = res.data.result
        })
      },
//      获取独家放送
      fetchRecommendSole () {
        let self = this
        axios.get('/api/personalized/privatecontent').then(function (res) {
          self.recommendSole = res.data.result
        })
      },
//      获取推荐mv
      fetchRecommendMv () {
        let self = this
        axios.get('/api/personalized/mv').then(function (res) {
          self.recommendMv = res.data.result
        })
      },
//      获取电台主播
      fetchRecommendRadioAnchor () {
        let self = this
        axios.get('/api/personalized/djprogram').then(function (res) {
          self.recommendRadioAnchor = res.data.result
        })
      }
    },
    created () {
      this.fetchBanner()
      this.fetchRecommendSongSheet()
      this.fetchRecommendSole()
      this.fetchRecommendMv()
      this.fetchRecommendRadioAnchor()
    }
  }
</script>
<style>
  @import "../../assets/css/css.css";

  .swiper-container {
    position: relative;
    overflow: hidden;
    z-index: 1;
    width: 100%;
    height: 150px;
  }

  .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
    background-color: #fff;
  }

  .swiper-pagination {
    position: absolute;
    text-align: center;
    transition: .3s;
    transform: translate3d(0, 0, 0);
    z-index: 10;
  }

  .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 10px;
    left: 0;
    width: 100%;
  }

  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 100%;
    background: #000;
    opacity: .1;
    margin: 0 5px;
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
    background: #D33A31;
  }

  .swiper-slide {
    height: 100%;
  }

  .swiper-slide img {
    width: 100%;
    height: 100%;
  }

  .recommend-list {
    width: 100%;
    display: flex;
    padding: 10px 0;
    border-bottom: 1px solid #DADCDD;
    font-size: 12px;
  }

  .recommend-list li {
    flex: 1;
    text-align: center;
  }

  .recommend-list li img {
    width: 50%;
  }
  .recommend-foot{
    margin-top: 30px;
    padding: 25px 0;
    border-top: 1px solid #DADCDD;
    text-align: center;
    color: #797A7B;
    font-size: 12px;
  }
  .recommend-foot p{
    margin-bottom: 22px;
  }
  .recommend-foot a{
    padding: 8px 15px;
    margin-top: 10px;
    border: 1px solid #D33A31;
    border-radius: 16px;
    color:  #D33A31;
  }

</style>
