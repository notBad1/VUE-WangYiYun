<template>
  <div class="typeList flex">
    <i v-bind:class="icon" class="typeIcon red"></i>
    <div class="list-wrapper">
      <div class="type">
        <span>{{name}}</span>
        <span class="typeCount" v-show="isCount">({{count}})</span>
      </div>
      <i class="icon-Horn red horn"></i>
    </div>
  </div>
</template>

<script>
//  我的音乐类型列表
  export default {
    props: {
      name: {
        type: String
      },
      icon: {
        type: String
      },
      count: {
        type: String
      }
    },
    computed: {
      isCount () {
        return this.count.length
      }
    }
  }
</script>


<style>
  @import "../../static/font-icon/style.css";
  @import "../assets/css/css.css";
  .typeList{
    height:50px;
    background-color: #fff;
  }
  .typeIcon{
    padding: 0 15px;
    font-size: 22px;
  }

  .typeCount{
    font-size: 12px;
    color: #919293;
  }
  .horn{
    font-size: 18px;
    padding-right: 15px;
    display: none;
  }
</style>
