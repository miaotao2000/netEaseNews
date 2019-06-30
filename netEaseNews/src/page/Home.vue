<template>
  <div class="page">
    <navbar :active='$store.state.active'  :list='$store.state.navbar' @toColumn='toColumn'/>
    <swiper  :active='$store.state.active' :contentArr='$store.state.navbar'/>
    <column :lists='$store.state.navbar' :hid='hid' :active='$store.state.active' :moreList='$store.state.moreList'
     @close='closeColumn'/>
  </div>
</template>

<script>
import swiper from '@/page/homeComponents/Swiper'
import navbar from '@/page/homeComponents/Navbar'
import column from '@/page/homeComponents/Column'
import { mapActions } from 'vuex'
import md5 from '../../util/md5'
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
    token = md5(token)
    console.log(token)
    this.setUser(token)
    this.$message({
      showClose: true,
      message: `欢迎回来${this.$store.state.user.nickName}`,
      type: 'success'
    })
  },
  mounted () {
    this.$router.push(this.$store.state.navbar[this.$store.state.active].component)
    this.pushRoute(this.$store.state.navbar[this.$store.state.active].component)
    this.shiftRoute()
  },
  methods: {
    ...mapActions([
      'pushRoute',
      'shiftRoute',
      'setUser'
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
