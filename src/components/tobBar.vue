<template>
    <div class="tobBar">
      <div class="tobBar-warpper flex">
        <i class="icon-List3 white" v-on:click="showMueu"></i>
        <div class="centerMenu">
          <router-link to="/myMusic">
            <i class="icon-Music"></i>
          </router-link>
          <router-link to="/recommend">
            <i class="icon-Wangyiyun"></i>
          </router-link>
          <router-link to="/topic">
            <i class="icon-Me2"></i>
          </router-link>
        </div>
        <i class="icon-Search white"></i>
      </div>
      <router-view></router-view>
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
    z-index: 10;
  }
  .tobBar-warpper{
    height: 100%;
    padding: 0 15px;
    justify-content: space-between;
  }
  .centerMenu i{
    padding: 0 10px;
    color: #E58983;
  }
  .centerMenu a{
    text-decoration: none;
  }
  .router-link-active>i{
    color: #fff;
  }
</style>
