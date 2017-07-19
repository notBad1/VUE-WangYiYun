<template>
  <div class="leftSidebar">
    <transition name="fade">
      <div class="mask" v-show="isShowSidebar" v-on:click="hideMenu"></div>
    </transition>

    <transition name="sideUp">
      <div class="sidebar" v-show="isShowSidebar">
        <div class="sidebar-wrapper">
          <div class="sidebar-header">
            <img class="head-bg" v-bind:src="info.srcBg">
            <img class="head" v-bind:src='info.src' alt="头像">
            <div class="userinfo flex">
              <div class="user">
                <span>{{info.name}}</span>
                <span class="grade">Lv.{{info.grade}}</span>
              </div>
              <div class="sign" v-on:click="signClick">
                <i class="icon-Sign" v-show="showSignIcon"></i>
                <span>{{sign}}</span>
              </div>
            </div>
          </div>
          <div class="siderbar-list">
            <sidebarList iconClass="icon-Message3" sidebarName="我的消息" sidebarDisc="1" discBg="discBg"></sidebarList>
            <sidebarList iconClass="icon-Member" sidebarName="会员中心" sidebarDisc="" discBg=""></sidebarList>
            <sidebarList iconClass="icon-ShoppingCart" sidebarName="商城" sidebarDisc="" discBg=""></sidebarList>
            <sidebarList iconClass="icon-Online" sidebarName="在线听歌免流量" sidebarDisc="" discBg=""></sidebarList>
            <div class="DividingLine"></div>
            <sidebarList iconClass="icon-Me1" sidebarName="我的好友" sidebarDisc="" discBg=""></sidebarList>
            <sidebarList iconClass="icon-Nearby" sidebarName="附近的人" sidebarDisc="网易云音乐熊猫歪唱大赛" discBg="discDot"></sidebarList>
            <div class="DividingLine"></div>
            <sidebarList iconClass="icon-Skin" sidebarName="个性皮肤" sidebarDisc="官方红" discBg=""></sidebarList>
            <sidebarList iconClass="icon-ShazamEncore" sidebarName="听歌识曲" sidebarDisc="" discBg=""></sidebarList>
            <sidebarList iconClass="icon-Timing" sidebarName="定时停止播放" sidebarDisc="" discBg=""></sidebarList>
            <sidebarList iconClass="icon-Clock" sidebarName="音乐闹钟" sidebarDisc="" discBg=""></sidebarList>
            <sidebarList iconClass="icon-Drive" sidebarName="驾驶模式" sidebarDisc="" discBg=""></sidebarList>
            <sidebarList iconClass="icon-Cloud" sidebarName="音乐云盘" sidebarDisc="" discBg=""></sidebarList>
          </div>
        </div>
        <div class="sidebar-fotter flex">
          <div class="foot-box">
            <i class="icon-NightMode foot-icon"></i>
            <span>夜间模式</span>
          </div>
          <div class="foot-box">
            <i class="icon-Set foot-icon"></i>
            <span>设置</span>
          </div>
          <div class="foot-box">
            <i class="icon-SignOut foot-icon"></i>
            <span>退出</span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
    import sidebarList from './sidebarList.vue'
    import store from '../store'

export default {
      props: {
        info: {
          type: Object
        }
      },
//      数据
      data () {
        return {
          sign: '签到',
          showSignIcon: true
        }
      },
//      组件
      components: {
        'sidebarList': sidebarList
      },
//      方法
      methods: {
//        隐藏菜单
        hideMenu () {
          store.dispatch({
            type: 'hideSideBar'
          })
        },
//        点击签到
        signClick () {
          this.sign = '已签到'
          this.showSignIcon = false
        }

      },
//      计算属性
      computed: {
        // 显示
        isShowSidebar () {
          return store.state.sideBar.isShow
        }
      }
    }
</script>
<style>
  @import "../assets/css/css.css";
  @import "../../static/font-icon/style.css";
  .sidebar{
    position: fixed;
    left:0;
    top:0;
    bottom: 0;
    overflow-y: auto;
    width:286px;
    background-color: #fff;
    z-index: 100;
    /*过渡*/
    transfrom:translateX(0)
  }
  .sidebar-header{
    position: relative;
    width:100%;
    height:168px;
    background-size:100%;
  }
  .head-bg{
    position: absolute;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
  }
  .head{
    position: absolute;
    bottom: 50px;
    left: 15px;
    width:56px;
    height: 56px;
    border-radius: 28px;
    z-index: 100;
  }
  .userinfo{
    position: absolute;
    bottom: 20px;
    left:0;
    width:100%;
    height: 20px;
    font-size: 16px;
    color: #fff;
    z-index: 100;
  }
  .user{
    display: flex;
    align-items: center;
    height: 20px;
    margin-left: 15px;
  }
  .grade{
    height: 14px;
    line-height: 14px;
    padding: 0 5px;
    margin-left: 10px;
    border:1px solid #fff;
    border-radius: 10px;
    font-size: 11px;
    font-style:italic
  }
  .sign{
    display: flex;
    align-items: center;
    height:18px;
    padding: 0 8px;
    border:1px solid #fff;
    border-radius: 10px;
    margin-right: 15px;
    font-size: 12px;
  }
  .sign .icon-Sign {
    font-size: 18px;
  }
  /*分隔线*/
  .DividingLine{
    width:100%;
    height:10px;
    background-color: #F2F4F5;
  }
  /*底部*/
  .sidebar-fotter{
    position: fixed;
    bottom: 0;
    left: 0;
    width:256px;
    height:40px;
    border-top: 1px solid #D9D9D9;
    background-color: #fff;
    padding: 0 15px;
    font-size: 14px;
  }
  .foot-icon{
    font-size: 22px;
    color: #666666;
    margin-right: 10px;
  }
  .foot-box{
    display: flex;
    align-items: center;
  }

  /*滑动效果*/
  .sideUp-enter-to, .sideUp-leave-to{
    transition: all .2s
  }
  .sideUp-enter, .sideUp-leave-to{
    transform:translateX(-286px)
  }
</style>
