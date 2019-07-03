<template>
  <div class="page">
    <navbar :active='$store.state.home.active'  :list='$store.state.home.navbar' @toColumn='toColumn'/>
    <swiper  :active='$store.state.home.active' :contentArr='$store.state.home.navbar'/>
    <column :list='$store.state.home.navbar' :hid='hid' :active='$store.state.home.active' :moreList='$store.state.home.moreList'
     @close='closeColumn'/>
  </div>
</template>

<script>
import swiper from '@/page/homeComponents/Swiper'
import navbar from '@/page/homeComponents/Navbar'
import column from '@/page/homeComponents/Column'
import { mapActions } from 'vuex'
export default {
  components: {
    'swiper': swiper,
    'navbar': navbar,
    'column': column
  },
  data () {
    return {
      hid: true
    }
  },
  created () {
    let token = sessionStorage.getItem('token')
    let user = localStorage.getItem('user')
    if (token && !this.$store.state.home.login) {
      this.$http.post('user/login/test', {
        token,
        user
      }).then(res => {
        this.changeLogin()
        this.setUser(res.data.user)
      })
    }
  },
  mounted () {
    this.$router.push(this.$store.state.home.navbar[this.$store.state.home.active].component)
    this.pushRoute(this.$store.state.home.navbar[this.$store.state.home.active].component)
    this.shiftRoute()
  },
  methods: {
    ...mapActions([
      'pushRoute',
      'shiftRoute',
      'setUser',
      'changeLogin'
    ]),
    toColumn () {
      this.hid = false
    },
    closeColumn (opt) {
      this.hid = true
      this.headArr = opt
    }
  }
}
</script>

<style>

</style>
