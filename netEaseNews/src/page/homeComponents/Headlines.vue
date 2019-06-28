<template>
  <div class="page">
    <card :feedio='news'/>
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
    }
  },
  mounted () {
    this.getHeadlines()
  }
}
</script>

<style>

</style>
