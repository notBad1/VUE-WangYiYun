<template>
  <!--歌手列表-->
  <div class="singerList flex">
    <img class="singerImg" v-bind:src="item.albumPicUrl" alt="">
    <div class="list-wrapper">
      <div class="flex1">
        <p>{{name}}</p>
        <span class="count">{{count}}首</span>
      </div>
      <i class="icon-List2 list-icon"></i>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      item: {
        type: String
      }
    },
    computed: {
      i () {
        console.log(this.item)
        return this.item
      }
    }
  }
</script>
<style>
  @import "../../static/font-icon/style.css";
  @import "../assets/css/css.css";

  .singerList {
    height: 60px;
  }

  .singerImg {
    width: 50px;
    height: 50px;
    margin: 0 8px;
  }
</style>
