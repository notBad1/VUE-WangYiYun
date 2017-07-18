<template>
    <div class="songList flex">
      <div class="flex" v-bind:class="{song-selected:showHorn}">
        <i v-show="showHorn" class="icon-Horn songList-horn"></i>
        <span class="songName">{{songName}}</span>
        <span class="song-singer"> - {{songSinger}}</span>
      </div>
      <div class="flex">
        <i v-show="showLink" class="icon-Link songList-link"></i>
        <i class="icon-Delete2 songList-delete"></i>
      </div>
    </div>
</template>
<script>
    export default {
//        props: []
    }
</script>
<style>
  @import "../assets/css/css.css";
  @import "../../static/font-icon/style.css";
  .songList{
    height:40px;
    margin-left: 15px;
    padding-right: 15px;
    border-bottom: 1px solid #E2E2E2;
  }
  .song-selected, .song-selected .song-singer{
    color: #D33A31;
  }
  .songList-horn{
    font-size: 20px;
    color: #D33A31;
  }
  .songList-link{
    font-size: 20px;
    color: #B2B2B2;
    margin-right: 20px;
  }
  .songList-delete{
    font-size: 18px;
    color: #B2B2B2;
  }

  .songName{
    margin-left: 10px;
  }
  .song-singer{
    font-size: 11px;
    color: #A6A6A6;
    margin-top: 4px;
    margin-left: 3px;
  }
</style>
