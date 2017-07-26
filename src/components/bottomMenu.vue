<template>
  <div class="bottomMenu">
    <transition name="sideUp">
      <div class="bottomMenu-box" v-show="isShowBottomMenus">
        <p class="bottomMenu-title">
          <span v-show="showpoint">歌单：</span>
          {{bottomMenusTitle}}
        </p>
        <typeList v-show="showCreat" name='创建新歌单' icon='icon-Add1' count=''></typeList>
        <typeList v-show="shoWmanage" name='歌单管理' icon='icon-SongSheet' count=''></typeList>
        <typeList v-show="showOption" name='下载' icon='icon-Download' count=''></typeList>
        <typeList v-show="showOption" name='分享' icon='icon-Share' count=''></typeList>
        <typeList v-show="showDelete" name='删除' icon='icon-Delete1' count=''></typeList>
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
      // 显示底部菜单
      isShowBottomMenus () {
        return store.state.bottomMenu.isShowBottomMenu
      },
//      歌单的类型
      bottomMenusTitle () {
        return store.state.bottomMenu.bottomMenuTitle
      },
//      显示歌单二字
      showpoint () {
        return store.state.bottomMenu.isShowpoint
      },
//      显示创建新歌单选项
      showCreat () {
        return store.state.bottomMenu.isShowCreat
      },
//      显示歌单管理
      shoWmanage () {
        return store.state.bottomMenu.isShoWmanage
      },
//      显示下载、分享选项
      showOption () {
        return store.state.bottomMenu.isShowOption
      },
//      显示删除选项
      showDelete () {
        return store.state.bottomMenu.isShowDelete
      }
    }
  }
</script>
<style>
  @import "../../static/font-icon/style.css";
  @import "../assets/css/css.css";

  .bottomMenu-box {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    z-index: 80;
    padding-bottom: 10px;
    /*过渡*/
    transform: translate3d(0, 0, 0)
  }

  .bottomMenu-title {
    padding: 10px;
    font-size: 14px;
    color: #616161;
  }

  /*滑动效果*/
  .bottomMenu-box.sideUp-enter-to, .bottomMenu-box.sideUp-leave-to {
    transition: all .3s
  }

  .bottomMenu-box.sideUp-enter, .bottomMenu-box.sideUp-leave-to {
    transform: translate3d(0, 100%, 0)
  }
</style>
