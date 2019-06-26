<template>
  <div class="container">
    <div class="video-con" v-for="(item, index) of feedStream" :key='index'>
    <div class="video" :style="'background-image:url('+item.bgImg+')'">
      <div class="title">{{item.title}}</div>
      <div class="play-times">{{item.playTimes}}播放</div>
      <div class="img">
         <img src="../../assets/video/play.svg" alt="" class="icon">
      </div>
      <div class="time">{{item.time}}</div>
    </div>
    <div class="footer">
      <div class="author-con">
        <div class="author">
        <img class="avatar" src="../../assets/video/avatar.svg">
        <span class="name">{{item.name}}</span>
        </div>
      </div>
      <div class="control">
        <div class="praise">
          <img src="../../assets/video/praise.svg" alt="">
          <div class="number">{{item.praiseNumber}}</div>
        </div>
        <div class="comment">
          <img src="../../assets/joke/comment.svg" alt="">
          <div class="number">{{item.commentNumbre}}</div>
        </div>
        <div class="share">
          <img src="../../assets/joke/share.svg" alt="">
        </div>
      </div>
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
          title: '刘恺威新恋情曝光，女友是大家最熟悉的她？网友：难怪会离婚！',
          bgImg: 'http://60.205.203.205:8080/imgs/nsh7.jpg',
          playTimes: '30.8万',
          time: '01:48',
          avatar: '',
          name: '夜郎观世界',
          praiseNumber: 480,
          commentNumbre: 108
        },
        {
          title: '李咏生前最后主持，不断跟大家挥手道别，却无人注意他说的2个字',
          bgImg: 'http://60.205.203.205:8080/imgs/nsh2.jpg',
          playTimes: '15.4万',
          time: '01:15',
          avatar: '',
          name: '娱乐综艺唠',
          praiseNumber: 145,
          commentNumbre: 41
        },
        {
          title: '《欢乐喜剧人》贾玲实力搞笑，观众笑到肚子疼，搞笑啊！',
          bgImg: 'http://60.205.203.205:8080/imgs/nsh10.jpg',
          playTimes: '2453',
          time: '12:23',
          avatar: '',
          name: '嘻哈百晓生',
          praiseNumber: 15,
          commentNumbre: 0
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.video
  height 4.8rem /* 180/37.5 */
  position relative
  .title
    padding .133333rem /* 5/37.5 */
    color white
    font-size .426667rem /* 16/37.5 */
    line-height 1.5
    background linear-gradient(to bottom, rgba(0,0,0,.5), transparent)
  .play-times
    color white
    padding 0 .133333rem /* 5/37.5 */
  .img
    width 1.2rem /* 45/37.5 */
    height 1.2rem /* 45/37.5 */
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
    background-color rgba(0,0,0,.3)
    border-radius 50%
    img
      position absolute
      width .8rem /* 30/37.5 */
      left 54%
      top 51%
      transform translate(-50%, -50%)
  .time
    color white
    position absolute
    bottom 0
    right 0
    padding .133333rem /* 5/37.5 */
.footer
  display flex
  padding .346667rem /* 13/37.5 */ .133333rem /* 5/37.5 */
  .author-con
    flex 4
    position relative
    .author
      background-color #E7EBED
      position absolute
      top 50%
      transform translateY(-50%)
      display flex
      align-items center
      border-radius .533333rem /* 20/37.5 */
      .avatar
        width .533333rem /* 20/37.5 */
      .name
        padding .133333rem /* 5/37.5 */ .213333rem /* 8/37.5 */
  .control
    flex 2
    display flex
    justify-content center
    .praise img, .comment img, .share img
      width .533333rem /* 20/37.5 */
      margin-left .4rem /* 15/37.5 */
      margin-right .133333rem /* 5/37.5 */
    .praise, .comment
      position relative
      .number
        position absolute
        top 0
        right -.293333rem /* 11/37.5 */
        font-size .266667rem /* 10/37.5 */
        transform scale(0.7)
        color #000
</style>
