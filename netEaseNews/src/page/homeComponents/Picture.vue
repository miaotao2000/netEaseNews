<template>
  <div class="page">
    <div class="card-con" v-for="(item, index) of feedStream" :key='index'>
      <div class="img-con_even" v-if="index%2==0">
        <img :src="item.imgList[0]" alt="">
        <div class="mask">
          <img src="../../assets/img/img.svg" alt="" class="icon">
          <div>{{item.imgList.length+1+'pics'}}</div>
        </div>
      </div>
      <div class="img-con_odd" v-else>
        <div class="left">
          <img :src="item.imgList[0]" alt="">
        </div>
        <div class="right">
          <img :src="item.imgList[1]" alt="" id="topImg">
          <img :src="item.imgList[2]" alt="">
        </div>
        <div class="mask">
          <img src="../../assets/img/img.svg" alt="" class="icon">
          <div>{{item.imgList.length+1+'pics'}}</div>
        </div>
      </div>
      <div class="detail">
        {{item.text}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      feedStream: [
        {
          imgList: [
            'http://60.205.203.205:8080/imgs/nsh15.jpg',
            'http://60.205.203.205:8080/imgs/nsh10.jpg',
            'http://60.205.203.205:8080/imgs/nsh8.jpg'
          ],
          text: '印度总理莫迪与民众同练瑜伽 动作妖娆'
        },
        {
          imgList: [
            'http://60.205.203.205:8080/imgs/nsh6.jpg',
            'http://60.205.203.205:8080/imgs/nsh4.jpg',
            'http://60.205.203.205:8080/imgs/nsh1.jpg'
          ],
          text: '航拍湖南新晃一中埋尸现场 坑深近4米'
        },
        {
          imgList: [
            'http://60.205.203.205:8080/imgs/nsh12.jpg',
            'http://60.205.203.205:8080/imgs/nsh3.jpg',
            'http://60.205.203.205:8080/imgs/nsh7.jpg'
          ],
          text: '男子挑战吉尼斯纪录 将10公斤蜜蜂吸到身上'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.card-con
  padding .213333rem /* 8/37.5 */
  .img-con_even
    position relative
    img
      width 100%
    .mask
      position absolute
      display flex
      color white
      bottom .213333rem /* 8/37.5 */
      background-color rgba(0,0,0,.5)
      right .213333rem /* 8/37.5 */
      padding .08rem /* 3/37.5 */ .133333rem /* 5/37.5 */
      border-radius .08rem /* 3/37.5 */
      align-items center
      .icon
        width .48rem /* 18/37.5 */
        height .48rem /* 18/37.5 */
        margin-right .133333rem /* 5/37.5 */
      div
        margin-right .08rem /* 3/37.5 */
  .detail
    text-align center
    font-size .373333rem /* 14/37.5 */
    padding .133333rem /* 5/37.5 */0
    box-shadow: 0px 2px 2px #aaa
  .img-con_odd
    display flex
    position relative
    .left
      flex 7
      overflow hidden
      margin-right .08rem /* 3/37.5 */
      img
        height 4.986667rem /* 187/37.5 */
    .right
      flex 3
      overflow hidden
      img
        height 2.453333rem /* 92/37.5 */
        display block
      #topImg
        margin-bottom .08rem /* 3/37.5 */
    .mask
      position absolute
      display flex
      color white
      bottom .213333rem /* 8/37.5 */
      background-color rgba(0,0,0,.5)
      right .213333rem /* 8/37.5 */
      padding .08rem /* 3/37.5 */ .133333rem /* 5/37.5 */
      border-radius .08rem /* 3/37.5 */
      align-items center
      .icon
        width .48rem /* 18/37.5 */
        height .48rem /* 18/37.5 */
        margin-right .133333rem /* 5/37.5 */
      div
        margin-right .08rem /* 3/37.5 */
</style>
