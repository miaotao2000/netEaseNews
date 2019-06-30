<template>
  <div class="container">
    <div class="header">
      <input class="title-input" v-model="title" placeholder="请输入文章标题..."> 
      <div class="btn-con">
        <div class="btn" @click="post">发表</div>
      </div>
    </div>
    <mavon-editor v-model="md"/>
  </div>
</template>

<script>
export default {
 data () {
   return {
     title: '',
     md: ''
   }
 },
 methods: {
  post () {
    if (this.md) {
      this.$http.post('/follow',{
        title: this.title,
        md: this.md
      }).then(res => {
        console.log(res)
      })
    } else {
      console.log('err')
    }
  } 
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.container
  .header
    display flex
    align-items: center;
    padding: 0 1.4rem;
    height: 5.334rem;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    .title-input
      margin: 0;
      padding: 0;
      font-size: 2rem;
      font-weight: 700;
      color: #000;
      border: none;
      outline: none;
      flex 8
    .btn-con
      flex 2
      .btn
        color white
        background-color #007ACC
        width 80px
        text-align center
        padding 7px 5px
        border-radius 5px
        &:hover
          opacity .8
          cursor pointer
</style>
<style lang="stylus">
.markdown-body
  height 80vh
  p
    img
      display block
      max-width 100%
      max-height 668px
      margin 0 auto
</style>
