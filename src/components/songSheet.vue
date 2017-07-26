<template>
    <div class="songSheet">
      <div class="title flex" @click="toggleSheets">
        <i class="icon-DownArrow arrow" ref="toggleicon"></i>
        <div class="flex1">
          <span ref = "typeName">{{typeList.name}}</span>
          <span>({{typeList.count}})</span>
        </div>
        <i class="icon-Set setting" @click.stop="showBottomMenu"></i>
      </div>
      <div v-show="showSheets" v-for='songSheet in songSheetList'>
        <div class="body flex">
          <img class="sheetImg" :src="songSheet.songSheetImg" alt="">
          <div class="list-wrapper">
            <div class="flex1">
              <span ref = "songSheetName" class="name">{{songSheet.name}}</span>
              <span class="count">{{songSheet.count}}首</span>
            </div>
            <i class="icon-List2 sheetoption" @click.stop="toggleSetSheet"></i>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
    import store from '../store'

    export default {
      props: {
        typeList: Object,
        songSheetList: Array
      },
      data () {
        return {
//          切换歌单显示
          showSheets: true,
          showMenu: false
        }
      },
      methods: {
//        切换歌单显示
        toggleSheets () {
          this.$refs.toggleicon.style.transform = this.showSheets ? 'rotate(-90deg)' : 'rotate(0)'
          this.showSheets = !this.showSheets
        },
//        显示底部设置菜单
        showBottomMenu () {
          store.state.bottomMenu.isShowpoint = false
          store.state.bottomMenu.isShowOption = false
          store.state.bottomMenu.isShowDelete = false
          store.state.bottomMenu.isShoWmanage = true
          let title = this.$refs.typeName.innerHTML
          store.state.bottomMenu.isShowCreat = title === '创建的歌单' && true
          store.dispatch('showBottomMenus', title)
        },
//        歌单设置切换
        toggleSetSheet (event) {
          store.state.bottomMenu.isShoWmanage = false
          store.state.bottomMenu.isShowCreat = false
          store.state.bottomMenu.isShowpoint = true
          store.state.bottomMenu.isShowOption = true
          store.state.bottomMenu.isShowDelete = this.$refs.typeName.innerHTML === '收藏的歌单' && true
          let name = event.target.parentNode.firstChild.firstChild.innerHTML
          store.dispatch('showBottomMenus', name)
        }
      }
    }
</script>
<style>
  @import "../../static/font-icon/style.css";
  @import "../assets/css/css.css";
  /*标题*/
  .title{
    padding: 0 15px;
    height:35px;
    background-color: #E7E9E9;
    justify-content: flex-start;
    color: #5C5D5D;
    font-size: 13px;
  }
  .arrow{
    font-size: 15px;
    margin-right: 15px;
  }
  .setting{
    font-size: 20px;
    color: #8B8C8C;
  }
  /*身体 */
  .body{
    height: 60px;
    background-color: #fff;
  }
  .sheetImg{
    width:50px;
    height: 50px;
    padding: 0 10px;
  }
  .count{
    display: block;
    font-size: 12px;
    color: #797A7B;
    margin-top: 5px;
  }
  .sheetoption{
    font-size: 16px;
    color: #AAABAC;
    padding: 0 15px;
    height:60px;
    line-height: 60px;
  }
  .sheetoption:hover{
    background-color: #BFC0C1;
  }
</style>
