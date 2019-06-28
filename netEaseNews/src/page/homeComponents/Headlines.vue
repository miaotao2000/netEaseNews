<template>
  <div class="page" @scroll="scroll">
    <card :feedio='$route.params.news || news'/>
  </div>
</template>

<script>
import card from '@/page/homeComponents/CardContent'
export default {
  components: {
    'card': card
  },
  data () {
    return {
      news: []
    }
  },
  methods: {
    getHeadlines () {
      this.$http.get('/articles')
        .then(res => {
          this.news = res.data.news
        })
    },
    scroll (el) {
      console.log(el)
    }
  },
  mounted () {
    this.getHeadlines()
  }
}
</script>

<style>

</style>
