<template>
  <div class="recommendList">
    <div class="recommendList-title">
      <div><span>{{title}}</span></div>
      <i class="icon-RightArrow recommendList-arrow"></i>
    </div>
    <ul class="recommendList1-content">
      <li v-for="(item,index) in items" v-bind:key="index">
        <img v-bind:src="item.picUrl" >
        <p>{{item.name}}</p>
        <span>{{item.artistName}}</span>

        <div class="recommendList-playCount" v-if="item.playCount">
          <i class="icon-Video recommendList-headset"></i>
          <span>{{ item.playCount | playCountFilter }}</span>
        </div>

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
    filters: {
      playCountFilter: function (num) {
        let count = parseInt(num).toString()
        if (count.length < 6) {
          return count
        } else {
          let a = count.length - 4
          return count.slice(0, a) + '万'
        }
      }
    }
  }
</script>
<style>
  .recommendList1-content li{
    width: 49.7%;
  }

  .recommendList1-content li p{
    margin: 5px 5px 0 5px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .recommendList1-content li>span{
    margin: 0 5px;
    font-size: 11px;
    color: #797A7B;
  }
  .recommendList1-content .recommendList-headset{
    margin-right: 3px;
  }
</style>
