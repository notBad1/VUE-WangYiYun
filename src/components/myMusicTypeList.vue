<template>
  <div class="typeList flex">
    <i v-bind:class="icon" class="typeIcon red"></i>
    <div class="typeBox">
      <div class="type">
        <span class="typeName">{{typeName}}</span>
        <span class="musicNum gray2">({{Num}})</span>
      </div>
      <i class="icon-Horn red horn"></i>
    </div>
  </div>
</template>

<script>
//  我的音乐类型列表
  export default {
    props: {
      typeName: {
        type: String
      },
      icon: {
        type: String
      },
      Num: {
        type: String
      }
    }
  }
</script>


<style>
  @import "../../static/font-icon/style.css";
  @import "../../static/font-icon/css.css";
  .typeList{
    height:50px;
  }
  .typeIcon{
    padding: 0 15px;
    font-size: 22px;
  }
  .typeBox{
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    border-bottom: 1px solid #E6E8E9;
  }
  .musicNum{
    font-size: 14px;
  }
  .horn{
    font-size: 18px;
    padding-right: 15px;
  }
</style>
