<template>
  <!--音乐列表-->
    <div class="musicList flex">
      <i v-show="showHorn" class="icon-Horn musicList-horn"></i>
      <div class="musicList-detail" v-bind:id="item.id">
        <div class="musicList-songname">
          <p>{{item.name}}<span v-show="showAlias">({{item.alias}})</span></p>
          <i v-show="showMv" class="icon-MV musicList-mv"></i>
        </div>
        <p class="musicList-songster">
          <i class="icon-Correct musicList-correct"></i>
          <span>{{item.singer}} - {{item.album}}</span>
        </p>
      </div>
      <i class="icon-List2 list-icon"></i>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        showHorn: false
      }
    },
    props: {
      item: {
        type: Object
      }
    },
    computed: {
      showMv () {
        return this.item.mv === '0' ? 0 : 1
      },
      showAlias () {
        return this.item.alias === 'undefined' ? 0 : 1
      }
    }
  }
</script>
<style>
  @import "../../static/font-icon/style.css";
  @import "../assets/css/css.css";
  .musicList{
    height:60px;
    margin-left: 15px;
    border-bottom: 1px solid #DADCDD;
  }
  .musicList-horn{
    font-size: 20px;
    color: #D33A31;
    margin-right: 10px;
  }
  .musicList-detail{
    flex: 1;
    text-align: left;
  }

  .musicList-songname{
    display: flex;
    align-items: center;
  }
  .musicList-songname p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 15px;
  }
  .musicList-songname span{
    color: #919293;
    margin-left: 5px;
  }
  .musicList-mv{
    margin-left: 2px;
    color: #D33A31;
  }

  .musicList-songster{
    display: flex;
    align-items: center;
    margin-top: 5px;
    font-size: 14px;
    color: #797A7B;
  }
  .musicList-correct{
    font-size: 18px;
    color: #5AB5E7;
    margin-right: 8px;
  }
</style>
