<template>
    <div class="bottomMenu">
      <transition  name="sideUp">
        <div class="bottomMenu-box" v-show="showMenu">
          <p class="bottomMenu-title">创建的歌单</p>
          <typeList name="创建新的歌单" icon="icon-Add1"></typeList>
          <typeList name="歌单管理" icon="icon-SongSheet"></typeList>
        </div>
      </transition>

      <transition name="fade">
        <div class="mask" v-show="showMenu"></div>
      </transition>
    </div>
</template>
<script>
    import typeList from './typeList.vue'

    export default {
      data () {
        return {
          showMenu: true
        }
      },
      components: {
        'typeList': typeList
      },
      methods: {
        toggleMenu () {
          console.log(this)
        }
      }
    }
</script>
<style>
  @import "../../static/font-icon/style.css";
  @import "../assets/css/css.css";

  .bottomMenu-box{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    z-index: 100;
    padding-bottom: 10px;
  }
  .bottomMenu-title{
    padding: 10px;
    font-size: 14px;
    color: #616161;
  }
  .sideUp-enter-to, .sideUp-leave-to{
    transition: all 0.3s
  }
  .sideUp-enter, .sideUp-leave-to{
    transform:translate3d(0,100%,0)
  }
  .fade-enter-active, .fade-leave-active {
    transition: all 0.3s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }


  /*遮罩层*/
  .mask{
    position: fixed;
    top:0;
    bottom: 0;
    left:0;
    right: 0;
    background-color: rgba(0,0,0,.5);
    z-index: 50;
  }
</style>
