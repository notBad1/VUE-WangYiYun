<template>
    <div class="songSheet">
      <div class="title flex" v-on:click="toggleSheets">
        <i class="icon-DownArrow arrow" ref="toggleicon"></i>
        <div class="detail">
          <span>创建的歌单</span>
          <span>(1)</span>
        </div>
        <i class="icon-Set setting" v-on:click.stop="toggleMenu"></i>
      </div>
      <div v-show="showSheets">
        <div class="body flex">
          <img class="sheetImg" src="../assets/image/003.jpg" alt="">
          <div class="detail">
            <span class="name">我喜欢的音乐</span>
            <span class="count">2首</span>
          </div>
          <i class="icon-List2 sheetList"></i>
        </div>
      </div>
      <bottomMenu v-show="showMenu"></bottomMenu>
    </div>
</template>
<script>
    import bottomMenu from './bottomMenu.vue'

    export default {
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
        toggleMenu () {
          console.log(this)
          this.showMenu = !this.showMenu
        }
      },
      components: {
        'bottomMenu': bottomMenu
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
  .detail{
    flex: 1;
  }
  .setting{
    font-size: 20px;
    color: #8B8C8C;
  }
  /*身体 */
  .body{
    height: 60px;
    justify-content: flex-start;
    background-color: #F2F4F5;
    position: relative;
    padding: 0 15px 0 5px;
  }
  .body:after{
    position: absolute;
    bottom: 0;
    content: "";
    background-color: #DADCDD;
    height: 1px;
    right:0;
    left:65px;
  }

  .sheetImg{
    width:50px;
    height: 50px;
    margin-right: 10px;
  }
  .count{
    display: block;
    font-size: 12px;
    color: #797A7B;
    margin-top: 5px;
  }
  .sheetList{
    font-size: 16px;
    color: #AAABAC;
  }
</style>
