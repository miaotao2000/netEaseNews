<template>
  <div class="page">
    <n-header/>
    <navbar :active='$store.state.active'  :list='$store.state.navbar' @toColumn='toColumn'/>
    <swiper  :active='$store.state.active' :contentArr='$store.state.navbar'/>
    <column :lists='$store.state.navbar' :hid='hid' :active='$store.state.active' :moreList='$store.state.moreList'
     @close='closeColumn'/>
  </div>
</template>

<script>
import header from '@/page/homeComponents/Header'
import swiper from '@/page/homeComponents/Swiper'
import navbar from '@/page/homeComponents/Navbar'
import column from '@/page/homeComponents/Column'
export default {
  components: {
    'n-header': header,
    'swiper': swiper,
    'navbar': navbar,
    'column': column
  },
  data () {
    return {
      hid: true
    }
  },
  mounted () {
    if (this.active === 0) {
      this.$router.push({name: 'Headlines'})
    } else {
      this.$router.push(this.$store.state.navbar[this.$store.state.active].component)
    }
  },
  methods: {
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
