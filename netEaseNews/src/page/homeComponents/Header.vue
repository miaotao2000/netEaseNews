<template>
    <div class="container">
        <div class="title">小易</div>
        <div class="search-con">
        <van-swipe style="height:100%;width:100%" vertical :autoplay='3000' :show-indicators='false'>
        <van-swipe-item v-for="(item, index) of header" :key="index">
            <div class="flex">
            <!-- <div class="el-icon-search"></div> -->
            <img src="../../assets/img/search.svg" alt="" class="search">
            <div class="content">{{item}}</div>
            </div>
        </van-swipe-item>
        </van-swipe>
        </div>
        <div class="end"></div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      header: [
        '多久洗一次澡科学',
        '华为进军电视领域',
        '网上抢红包要交税',
        '动物园游客砸熊猫'
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
    color white
    background-color #E22319
    display flex
    padding .266667rem 0
    .title
        flex 1.5
        font-size .426667rem /* 16/37.5 */
        box-sizing border-box
        padding .16rem /* 6/37.5 */ .266667rem /* 10/37.5 */
        text-align center
        margin-top -.08rem /* 3/37.5 */
    .search-con
        flex 7
        display flex
        box-sizing border-box
        justify-content center
        align-items center
        font-size .373333rem /* 14/37.5 */
        background-color rgba(255,255,255,.2)
        border-radius 1.066667rem /* 40/37.5 */
        .flex
            display flex
            box-sizing border-box
            justify-content center
            align-items center
            height 100%
            .search
                width .48rem /* 18/37.5 */
                margin-right .213333rem /* 8/37.5 */
    .end
        flex 1.5
</style>
