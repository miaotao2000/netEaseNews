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
            'https://nie.res.netease.com/r/pic/20181112/2de5ed29-88e1-478f-8b73-e81eaf2d0de0.jpg',
            'https://nie.res.netease.com/r/pic/20181112/c84f541f-4a9d-4e91-b771-16fe4d7c189d.jpg',
            'https://nie.res.netease.com/r/pic/20181112/5957e397-2269-4b78-93b9-49cf971ed9fa.jpg'
          ],
          text: '印度总理莫迪与民众同练瑜伽 动作妖娆'
        },
        {
          imgList: [
            'https://nie.res.netease.com/r/pic/20181112/b0066637-8175-40a5-8fd2-a1b252c18d8c.jpg',
            'https://nie.res.netease.com/r/pic/20181112/d6a0da64-8d8d-441f-9a10-07344762ab85.jpg',
            'https://nie.res.netease.com/r/pic/20181112/e47142f6-d42a-485d-b6a3-e208cf6d199a.jpg'
          ],
          text: '航拍湖南新晃一中埋尸现场 坑深近4米'
        },
        {
          imgList: [
            'https://nie.res.netease.com/r/pic/20181112/79b44269-730a-4eea-9e95-dc3936e412db.jpg',
            'https://nie.res.netease.com/r/pic/20181112/a956b20b-9cae-4168-aa8f-223b08328afa.jpg',
            'https://nie.res.netease.com/r/pic/20180817/68e7ea5a-8828-486e-91cd-1ec5ee4e2303.jpg'
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
