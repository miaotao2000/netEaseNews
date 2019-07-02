<template>
  <div class="container">
    <div class="header">
      <img src="../assets/comments/follow.jpg" alt="">
    </div>
    <div class="card" v-for="(item, index) of comments" :key='index'>
      <div class="card-header">
        <div class="avatar">
          <img src='../assets/video/avatar.svg' alt="">
        </div>
        <div class="nickName">{{item.nickName}}</div>
        <div class="encourage">
          <div>{{item.encourage}}</div>
          <img :src="includes(index)?praisehover:praise" alt="" @click="praised(index)">
        </div>
      </div>
      <div class="comments">
        <div class="left"></div>
        <div class="right">
          <div class="content">
            {{item.content}}
          </div>
    <other :other='item.other'/>
          <div class="repeat">
            <div class="time">
              {{item.createTime}}
            </div>
            <div class="span" @click="reply(item)">
              回复
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="more-follows" v-if="needMore">
      更多跟帖
    </div>
  </div>
</template>

<script>
import other from '@/components/otherComments'
export default {
  props: ['id', 'needMore', 'newother'],
  components: {
    'other': other
  },
  data () {
    return {
      comments: [],
      praise: '../../static/imgs/praise.svg',
      praisehover: '../../static/imgs/praise-hover.svg',
      active: []
    }
  },
  created () {
    this.getComments()
  },
  watch: {
    newother: function (newVal) {
      let index = this.comments.findIndex(info => info.userId === newVal.floId)
      if (index !== -1) {
        if (this.comments[index].hasOwnProperty('other')) {
          this.comments[index].other.push(newVal)
        } else {
          this.comments[index].other = []
          this.comments[index].other.push(newVal)
        }
        let comment = this.comments[index]
        this.comments.splice(index, 1, comment)
      }
    }
  },
  methods: {
    getComments () {
      this.$http.get('/follow', {
        params: {
          page: 1,
          id: this.id
        }
      })
        .then(res => {
          this.comments = res.data
        })
    },
    praised (index) {
      if (!this.includes(index)) {
        this.comments[index].encourage += 1
        this.active.push(index)
      }
    },
    includes (index) {
      return this.active.includes(index)
    },
    reply (item) {
      this.$emit('reply', {item})
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  margin-top .213333rem /* 8/37.5 */
  background-color white
  padding 0 .4rem /* 15/37.5 */
  padding-bottom  .666667rem /* 25/37.5 */
  .header
    width 100%
    img
      width 6.666667rem /* 250/37.5 */
      margin 0 auto
      display block
  .card
    .card-header
      display flex
      align-items center
      margin-top .4rem /* 15/37.5 */
      img
        flex 1
        width .986667rem /* 37/37.5 */
      .nickName
        flex 7
        font-size .373333rem /* 14/37.5 */
        margin-left .266667rem /* 10/37.5 */
        margin-top -.266667rem /* 10/37.5 */
        color #2472C8
      .encourage
        flex 2
        display flex
        align-items center
        img
          width .426667rem /* 16/37.5 */
          height .426667rem /* 16/37.5 */
          flex 1
        div
          flex 2
          text-align right
          margin-top .053333rem /* 2/37.5 */
    .comments
      display flex
      .left
        flex 1
      .right
        flex 9
        margin-left .266667rem /* 10/37.5 */
        .content
          font-size .426667rem /* 16/37.5 */
          margin-bottom .266667rem /* 10/37.5 */
        .repeat
          display flex
          font-size .32rem /* 12/37.5 */
          align-items center
          .time
            margin-right .32rem /* 12/37.5 */
            color #666
  .more-follows
    width 3.2rem /* 120/37.5 */
    padding .266667rem /* 10/37.5 */
    border 1px solid #EA6F5A
    margin 0 auto
    margin-top .533333rem /* 20/37.5 */
    text-align center
    border-radius .533333rem /* 20/37.5 */
    color #EA6F5A
</style>
