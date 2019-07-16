<template>
  <div class="login-con" v-show="$store.state.global.openLogin">
    <div class="logo-con">
      <img src="../assets/myfollow/close1.svg" alt="" @click="hideLogin">
      <div class="logo">小易</div>
    </div>

    <div class="login" v-if="!register">
    <div class="title">
      小易账号登录
    </div>
    <div class="user-con input" @click="userShow">
      <div class="desc" :id="block(show[0])">账号</div>
      <input type="text" placeholder="" v-if="show[0]" v-focus @blur="hid" v-model="user">
    </div>
    <div class="pass-con input" @click="passShow">
      <div class="desc" :id="block(show[1])">密码</div>
      <input type="password" placeholder="" v-if="show[1]" v-focus @blur="hid" v-model="pass">
    </div>
    </div>

    <div class="login" v-else>
    <div class="title">
      小易账号注册
    </div>
    <div class="user-con input" @click="userShow">
      <div class="desc" :id="block(show[0])">账号</div>
      <input type="text" placeholder="" v-if="show[0]" v-focus @blur="hid" v-model="user" ref='user'
      @input="test">
    </div>
    <div class="pass-con input" @click="passShow">
      <div class="desc" :id="block(show[1])">密码</div>
      <input type="password" placeholder="" v-if="show[1]" v-focus @blur="hid" v-model="pass" ref='pass'>
      <span><img src="../../static/imgs/right.svg" alt="" v-show="passed"></span>
    </div>
    <div class="pass-con input" @click="repassShow">
      <div class="desc" :id="block(show[2])">确认密码</div>
      <input type="password" placeholder="" v-if="show[2]" v-focus @blur="hid" v-model="repass">
      <span><img :src="rpsImg" alt=""></span>
    </div>
    </div>

    <div class="btn" :class="active" @click="tologin(active)">
      开始使用
    </div>
    <div class="other">
      <div class="empty"></div>
      <div class="register" @click="toregister">{{register?'账号登录':'账号注册'}}</div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  directives: {
    focus: {
      // 指令的定义
      inserted: function (el) {
        el.focus()
      }
    }
  },
  data () {
    return {
      show: [
        false,
        false,
        false
      ],
      user: '',
      pass: '',
      repass: '',
      register: false,
      tip: '',
      repassImg: [
        '../../static/imgs/right.svg',
        '../../static/imgs/wrong.svg'
      ]
    }
  },
  methods: {
    ...mapActions([
      'hidLogin',
      'changeLogin',
      'openLogin',
      'setUser'
    ]),
    hideLogin () {
      this.user = ''
      this.pass = ''
      this.repass = ''
      this.hidLogin()
    },
    toregister () {
      this.register = !this.register
      this.user = ''
      this.pass = ''
      this.repass = ''
    },
    userShow () {
      this.show.splice(0, 1, true)
    },
    passShow () {
      this.show.splice(1, 1, true)
    },
    repassShow () {
      this.show.splice(2, 1, true)
    },
    block (bool) {
      return bool ? 'block' : ''
    },
    hid (el) {
      if (!el.target) {
        return
      }
      if (el.target === this.$refs['user'] && this.user.length < 6) {
        this.$message('账号有效位数至少为6', 'error')
      }
      let show = [false, false, false]
      if (this.user) {
        show[0] = true
      }
      if (this.pass) {
        show[1] = true
      }
      if (this.repass) {
        show[2] = true
      }
      this.show = show
    },
    tologin (active) {
      if (!active) {
        return
      } else if (this.register) {
        this.$http
          .post('/user/register', {
            user: this.user,
            pass: this.pass
          })
          .then(res => {
            if (!res.data.register) {
              this.$message(res.data.msg, 'error')
              this.user = ''
              this.pass = ''
              this.repass = ''
              return
            }
            this.$message(res.data.msg, 'success')
            this.changeLogin()
            this.setUser(res.data.user)
            this.hidLogin()
            sessionStorage.setItem('token', res.data.user.token)
            localStorage.setItem('user', res.data.user.id)
          })
        return
      }
      this.$http.post('/user/login', {
        user: this.user,
        pass: this.pass
      }).then(res => {
        if (!res.data.login) {
          this.$message(res.data.msg, 'error')
          return
        }
        this.$message(res.data.msg, 'success')
        this.changeLogin()
        this.hidLogin()
        this.setUser(res.data.user)
        sessionStorage.setItem('token', res.data.user.token)
        localStorage.setItem('user', res.data.user.id)
      })
    },
    test () {
      this.user = this.user.replace(/[^A-Za-z0-9]/g, '')
    }
  },
  computed: {
    active () {
      if (!this.register) {
        return this.pass && this.user ? 'active' : ''
      }
      return this.user && this.pass1 ? 'active' : ''
    },
    passed () {
      return this.pass.length >= 6
    },
    pass1 () {
      return this.repass === this.pass
    },
    rpsImg () {
      if (this.repass.length >= this.pass.length && this.repass.length >= 6) {
        return this.pass1 ? this.repassImg[0] : this.repassImg[1]
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.login-con
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  background-color #fff
  z-index 1000
  padding .4rem /* 15/37.5 */
  .logo-con
    height 4rem /* 150/37.5 */
    position relative
    img
      position absolute
      left 0
      top 0
      width .666667rem /* 25/37.5 */
    .logo
      position absolute
      top 50%
      left 50%
      text-align center
      width 1.866667rem /* 70/37.5 */
      height 1.866667rem /* 70/37.5 */
      font-size .666667rem /* 25/37.5 */
      color #ffffff
      transform translate(-50%,-50%)
      background-color #E54D42
      border-radius 50%
      line-height 1.866667rem /* 70/37.5 */
  .title
      font-size .48rem /* 18/37.5 */
      font-weight bold
      margin .4rem /* 15/37.5 */0
  .input
    border-bottom 1px solid #ccc
    height 1.626667rem /* 61/37.5 */
    position relative
    input
      border none
      font-size .426667rem /* 16/37.5 */
      padding .266667rem /* 10/37.5 */0
      width 80%
    span
      float right
      img
        width .666667rem /* 25/37.5 */
    .desc
      font-size .373333rem /* 14/37.5 */
      font-size .426667rem /* 16/37.5 */
      position absolute
      bottom .533333rem /* 20/37.5 */
  .btn
    padding .266667rem /* 10/37.5 */0
    text-align center
    background-color #E54D42
    color #ffffff
    border-radius .533333rem /* 20/37.5 */
    margin-top 1.333333rem /* 50/37.5 */
    font-size .426667rem /* 16/37.5 */
    opacity 0.8
  .active
    opacity 1
  .other
    display flex
    padding .4rem /* 15/37.5 */0
    .register
      flex 2
      font-size .373333rem /* 14/37.5 */
      font-weight bold
    .empty
      flex 8
#block
  display block
  position static
  // transition all 0s
  font-size .373333rem /* 14/37.5 */
</style>
