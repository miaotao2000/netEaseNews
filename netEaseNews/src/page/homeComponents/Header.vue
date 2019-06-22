<template>
    <div class="container">
        <div class="title">心易</div>
        <div class="search-con">
            <div class="el-icon-search"></div>
            <div class="content">京东618正式开启</div>
        </div>
        <div class="end"></div>
    </div>
</template>

<script>
export default {

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
    .search-con
        flex 7
        display flex
        box-sizing border-box
        justify-content center
        align-items center
        font-size .373333rem /* 14/37.5 */
        background-color rgba(255,255,255,.2)
        border-radius 1.066667rem /* 40/37.5 */
        .el-icon-search
            margin-right  .133333rem /* 5/37.5 */
    .end
        flex 1.5
</style>
