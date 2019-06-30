<template>
  <div class="page">
    <m-header/>
    <loginWay/>
    <my/>
    <grid/>
    <func :list='func1'/>
    <func :list='func2'/>
  </div>
</template>

<script>
import header from '@/page/mineComponents/m-header'
import loginWay from '@/page/mineComponents/loginWay'
import grid from '@/page/mineComponents/grid'
import func from '@/page/mineComponents/func'
import my from '@/page/mineComponents/my'
export default {
  components: {
    'm-header': header,
    'loginWay': loginWay,
    'grid': grid,
    'func': func,
    'my': my
  },
  data () {
    return {
      func1: [
        {
          name: '我的关注',
          intro: '用户/圈子'
        },
        {
          name: '我的消息',
          intro: '回复/通知'
        },
        {
          name: '我的发布',
          intro: '发布的帖子'
        }
      ],
      func2: [
        {
          name: '免流量看新闻',
          intro: ''
        },
        {
          name: '意见反馈',
          intro: ''
        },
        {
          name: '设置',
          intro: ''
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.page
  background-color #E7EBED
</style>
