<template>
  <div class="page c-con" v-show="!hid">
    <header>
      <div class="title">所有栏目</div>
      <div class="icon" @click="closeColumn">
        <img src="../../assets/colmun/close.svg" alt="">
      </div>
    </header>
    <div class="my-colmun_con">
    <div class="my-colmun">
      <div class="l-title">我的栏目
        <span class="tip">{{tip}}</span>
      </div>
      <div class="btn" @click="edit">{{editText}}</div>
    </div>
    <div class="item" v-for="(item,index) of list" :key='index' :id="index == 0 && edited?'first':''"
    @touchstart.prevent='dragStart' :data-index='index' :class="itemClass(index)"
    @touchmove.prevent='dragMove' @touchend.prevent='dragEnd' style="top:;left:">
        <span v-show="edited&&trueDom&&index!=0" class="add" :data-index='index'>×</span>{{item.name}}
      </div>
      <div class="item falseDom" v-show="ready">
        <span v-show="edited" class="add" :data-index='falseDom.index'>×</span>{{moveText}}
      </div>
    </div>
    <div class="my-colmun_con">
    <div class="my-colmun">
      <div class="l-title">更多栏目
        <span class="tip">点击添加栏目</span>
      </div>
    </div>
    <div class="item" v-for="(item,index) of moreList" :key='index'
    :data-index='index' @click="addColumn">
        <span class="add" :data-index='index'>+</span>{{item.name}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['lists', 'hid'],
  data () {
    return {
      tip: '点击进入栏目',
      editText: '编辑',
      edited: false,
      dragged: false,
      dragIndex: '',
      falseDom: {
        index: '',
        oldX: '',
        oldY: '',
        width: '',
        height: ''
      },
      trueDom: true,
      moveText: '',
      ready: false,
      timeout: null,
      moreList: [
        {
          name: '星座',
          component: 'Constellation'
        },
        {
          name: '音乐',
          component: 'Musi'
        },
        {
          name: '教育',
          component: 'Education'
        },
        {
          name: '佛学',
          component: 'Buddhism'
        }
      ]
    }
  },
  methods: {
    itemClass (index) {
      index = index.toString()
      if (this.dragged && this.dragIndex === index) {
        return 'changed'
      }
    },
    edit () {
      if (this.edited) {
        this.tip = '点击进入栏目'
        this.editText = '编辑'
        this.edited = false
        return
      }
      this.tip = '拖动排序'
      this.editText = '完成'
      this.edited = true
    },
    dragStart (el) {
      this.timeout = setTimeout(() => {
        let index = el.target.dataset.index
        if (this.edited && index !== '0') {
          this.dragged = true
          this.moveText = this.list[index].name
          this.falseDom.index = index
          this.falseDom.oldX = el.target.offsetLeft
          this.falseDom.oldY = el.target.offsetTop - 10
          this.falseDom.width = el.target.offsetWidth
          this.falseDom.height = el.target.offsetHeight
        }
      }, 300)
    },
    dragMove (el) {
      if (this.dragged) {
        this.dragIndex = el.target.dataset.index
        let draged = document.querySelector('.changed')
        if (draged) {
          this.trueDom = false
          this.list[this.dragIndex] = ''
        }
        let falseDom = document.querySelector('.falseDom')
        falseDom.style.left = el.changedTouches[0].pageX - el.target.offsetWidth / 2 + 'px'
        falseDom.style.top = el.changedTouches[0].pageY - el.target.offsetHeight / 2 + 'px'
        this.ready = true
      }
    },
    dragEnd (el) {
      clearTimeout(this.timeout)
      if (this.dragged) {
        this.dragged = false
        this.ready = false
        this.trueDom = true
        let falseDom = document.querySelector('.falseDom')
        let newX = parseFloat(falseDom.style.left)
        let newY = parseFloat(falseDom.style.top)
        let goX = parseInt((newX - this.falseDom.oldX) / (this.falseDom.width))
        let goY = parseInt((newY - this.falseDom.oldY) / this.falseDom.height)

        let newIndex = parseInt(this.dragIndex) + goY * 4 + goX
        if (newIndex <= 0) {
          this.list[this.dragIndex] = this.moveText
          return
        }
        console.log(goX, goY, newIndex)
        this.list = this.list.filter(text => text !== '')
        this.list.splice(newIndex, 0, this.moveText)
        return
        // console.log(this.list)
      }
      if (this.edited && el.target.dataset.index !== '0') {
        let index = el.target.dataset.index
        let deleteText = this.list[index].name
        let component = this.list[index].component
        this.list.splice(index, 1)
        this.moreList.push({name: deleteText, component})
        console.log(this.moreList)
        this.$emit('changeActive')
      }
    },
    addColumn (el) {
      let index = el.target.dataset.index
      let addText = this.moreList[index].name
      let component = this.list[index].component
      this.moreList.splice(index, 1)
      this.list.push({name: addText, component})
    },
    closeColumn () {
      this.tip = '点击进入栏目'
      this.editText = '编辑'
      this.edited = false
      this.$emit('close', this.list)
    }
  },
  created () {
    this.list = this.lists
  }
}
</script>

<style lang="stylus" scoped>
#first
  border none
.falseDom
  position absolute
.c-con
  height 100vh
  position absolute
  top 0
  background-color white
  z-index 100
  .title
    font-weight bold
    text-align center
    font-size .426667rem /* 16/37.5 */
    margin .4rem 0
  .icon
    position absolute
    width .48rem /* 18/37.5 */
    height .48rem /* 18/37.5 */
    right .4rem /* 15/37.5 */
    top .4rem
    img
      width 100%
  .my-colmun
    display flex
    font-size .373333rem /* 14/37.5 */
    align-items center
    margin-bottom .266667rem /* 10/37.5 */
    .l-title
      flex 8
      font-weight bold
      .tip
        margin-left .266667rem /* 10/37.5 */
        font-weight normal
        color #ccc
    .btn
      flex 1.5
      border 1px solid red
      text-align center
      border-radius .4rem /* 15/37.5 */
      color red
      padding .08rem /* 3/37.5 */ 0
.my-colmun_con
  margin 0 .4rem /* 15/37.5 */
  margin-bottom .533333rem /* 20/37.5 */
  .item
    width 22%
    border 1px solid #ccc
    border-radius .4rem /* 15/37.5 */
    display inline-block
    text-align center
    margin-top .266667rem /* 10/37.5 */
    font-size .373333rem /* 14/37.5 */
    padding .16rem /* 6/37.5 */ 0
    margin-right 2%
    margin-left 0.4%
    vertical-align middle
    .add
      color #aaa
  .changed
    border none
</style>
