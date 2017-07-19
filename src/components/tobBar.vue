<template>
    <div class="tobBar">
      <div class="tobBar-warpper flex">
        <i class="icon-List3 white" v-on:click="showMueu"></i>
        <div class="centerMenu">
          <i class="icon-Music white"></i>
          <i class="icon-Wangyiyun paleRed"></i>
          <i class="icon-Me2 paleRed"></i>
        </div>
        <i class="icon-Search white"></i>
      </div>
    </div>
</template>
<script>
    import store from '../store'

    export default {
      methods: {
//        显示侧边栏
        showMueu () {
          store.dispatch({
            type: 'showSideBar'
          })
        }
      }
    }
</script>
<style>
  @import "../assets/css/css.css";
  @import "../../static/font-icon/style.css";
  .tobBar{
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    height: 50px;
    background-color: #D33A31;
    padding: 0 15px;
    z-index: 10;
  }
  .tobBar-warpper{
    height: 100%;
    justify-content: space-between;
  }
  .centerMenu i{
    padding: 0 10px;
  }
</style>
