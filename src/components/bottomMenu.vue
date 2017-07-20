<template>
    <div class="bottomMenu">
      <transition  name="sideUp">
        <div class="bottomMenu-box" v-show="isShowBottomMenus">
          <p class="bottomMenu-title">{{bttomMenus.title}}</p>
          <typeList v-for="item in bttomMenus.content" v-bind:name='item.name' v-bind:icon='item.icon' v-bind:count='item.count'></typeList>
        </div>
      </transition>

      <transition name="fade">
        <div class="mask" v-show="isShowBottomMenus" v-on:click="hiddenBottomMenu"></div>
      </transition>
    </div>
</template>
<script>
    import typeList from './typeList.vue'
    import store from '../store'

    export default {
//      data () {
//        return {
//          showMenu: true
//        }
//      },
      props: {
        bttomMenus: {
          type: Object
        }
      },
      components: {
        'typeList': typeList
      },
      methods: {
//        隐藏
        hiddenBottomMenu () {
          store.dispatch({
            type: 'hideBottomMenus'
          })
        }
      },
      computed: {
        // 显示
        isShowBottomMenus () {
          return store.state.bottomMenu.isShowBottomMenu
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
    z-index: 80;
    padding-bottom: 10px;
    /*过渡*/
    transform:translate3d(0,0,0)
  }
  .bottomMenu-title{
    padding: 10px;
    font-size: 14px;
    color: #616161;
  }
  /*滑动效果*/
  .bottomMenu-box.sideUp-enter-to, .bottomMenu-box.sideUp-leave-to{
    transition: all .3s
  }
  .bottomMenu-box.sideUp-enter, .bottomMenu-box.sideUp-leave-to{
    transform:translate3d(0,100%,0)
  }
</style>
