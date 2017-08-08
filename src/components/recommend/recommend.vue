<template>
  <!--推荐页面-->
    <div class="recommend">
        <div class="recommend-navBar">
          <router-link to="/recommend/recommendation"><span>个性推荐</span></router-link>
          <router-link to="/recommend/recommendSongSheet"><span>歌单</span></router-link>
          <router-link to="/recommend/recommendAnchorStation"><span>主播电台</span></router-link>
          <router-link to="/recommend/recommendRankingList"><span>排行榜</span></router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
//        props: []
    }
</script>
<style>
  @import "../../assets/css/css.css";
  .recommend-navBar{
    display: flex;
    height:40px;
    background-color: #fff;
    color: #666666;
  }
  .recommend-navBar a{
    flex: 1;
    text-align: center;
    height:38px;
    line-height: 38px;
    border-bottom: 2px solid #fff;
  }
  .recommend-navBar a.router-link-active{
    border-color: #D33A31;
    color: #D33A31;
  }
</style>

