<template>
  <div class="recommendList">
    <div class="recommendList-title">
      <div><span>{{title}}</span></div>
      <i class="icon-RightArrow recommendList-arrow"></i>
    </div>
    <ul class="recommendList-content" v-bind:class="{ 'recommendList-content-s': show }" >
      <li v-for="(item,index) in items" v-bind:key="index">
        <img v-bind:src="item.picUrl" >
        <p>{{item.name}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props: {
      title: {
        type: String
      },
      items: {
        type: Array
      }
    },
    data () {
      return {
        isShow: false
      }
    },
    computed: {
      show () {
        let n = 3
        this.isShow = n === this.items.length ? 1 : 0
        return this.isShow
      }
    }
  }
</script>
<style>
  .recommendList-title {
    height: 40px;
    width: 100%;
    font-size: 16px;
    display: flex;
    align-items: center;
    margin-top: 10px;
  }

  .recommendList-title span {
    padding-left: 10px;
    border-left: 2px solid #D33A31;
  }

  .recommendList-arrow {
    color: #919293;
    font-size: 17px;
    padding: 2px 0;
    margin-left: 3px;
  }
  .recommendList-content, .recommendList1-content{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: 12px;
  }
  .recommendList-content li, .recommendList1-content li{
    width:33%;
    margin-bottom: 10px;
  }
  .recommendList-content-s li{
    width: 49.8%;
  }
  .recommendList-content-s li:last-child{
    width:100%;
  }
  .recommendList-content li img, .recommendList1-content li img{
    width:100%;
    min-height: 80px;
  }
  .recommendList-content li p{
    margin: 5px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow:ellipsis;
  }
</style>
