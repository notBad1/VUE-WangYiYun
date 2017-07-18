<template>
    <div class="sidebarList">
      <i class="sidebarIcon" v-bind:class="iconClass"></i>
      <div class="flex flex1">
        <span>{{sidebarName}}</span>
        <div class="disc" v-bind:class='[discBg ,discDot]' v-show="showDisc">{{sidebarDisc}}</div>
      </div>
    </div>
</template>
<script>
    export default {
      data () {
        return {
          side_disc: this.sidebarDisc
        }
      },
      props: {
        iconClass: {
          type: String,
          default: ''
        },
        sidebarName: {
          type: String,
          default: ''
        },
        sidebarDisc: {
          type: String,
          default: ''
        },
        discBg: {
          type: String,
          default: ''
        },
        discDot: {
          type: String,
          default: ''
        }
      },
      computed: {
        showDisc () {
          return this.side_disc.length
        }
      }
    }
</script>
<style>
  @import "../assets/css/css.css";
  @import "../../static/font-icon/style.css";
  .sidebarList{
    height:40px;
    padding:0 15px;
    display: flex;
    align-items: center;
    font-size: 14px;
    background-color: #fff;
  }
  .sidebarIcon{
    margin-right: 10px;
    font-size: 22px;
    color: #999999;
  }
  .disc{
    color: #808080;
    font-size: 12px;
  }
  .discBg{
    display: inline-block;
    width:15px;
    height:15px;
    text-align: center;
    line-height: 15px;
    color: #fff;
    background-color: #DE3F3F;
    border-radius: 50%;
  }
  .discDot:after{
    content: "";
    display: inline-block;
    width:8px;
    height: 8px;
    background-color: #DE3F3F;
    border-radius: 50%;
    margin-left: 5px;
  }
</style>
