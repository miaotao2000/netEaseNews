<template>
  <div class="page">
    <n-header/>
    <navbar :active='$store.state.active'  :list='$store.state.navbar' @toColumn='toColumn'/>
    <swiper  :active='$store.state.active' :contentArr='$store.state.navbar' :totalnews='totalnews'/>
    <column :lists='$store.state.navbar' :hid='hid' :active='$store.state.active' @close='closeColumn'/>
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
      hid: true,
      totalnews: [
        {
          tag: '头条',
          feedio: [
            {
              text: '我们都被骗了，伊朗根本没想象中那么强大，俄专家告诉你有多悲惨',
              img: [
                'http://60.205.203.205:8080/imgs/nsh1.jpg',
                'http://60.205.203.205:8080/imgs/nsh2.jpg',
                'http://60.205.203.205:8080/imgs/nsh3.jpg'
              ],
              src: '居然之居',
              follow: '339跟帖'
            },
            {
              text: '库尔德到底是什么人?为什么整个中东世界，都在恶心他们！',
              img: [
                'http://60.205.203.205:8080/imgs/nsh4.jpg',
                'http://60.205.203.205:8080/imgs/nsh5.jpg',
                'http://60.205.203.205:8080/imgs/nsh6.jpg'
              ],
              src: '娱乐大傻猫',
              follow: '96跟帖'
            },
            {
              text: '龙生龙，凤生凤，那么张作霖生下的八个儿子，结局都怎么样呢？',
              img: [
                'http://60.205.203.205:8080/imgs/nsh7.jpg',
                'http://60.205.203.205:8080/imgs/nsh8.jpg',
                'http://60.205.203.205:8080/imgs/nsh9.jpg'
              ],
              src: '唯爱娱乐圈',
              follow: ''
            },
            {
              text: '土总统，若美就S-400系统问题实施制裁 土方将反制',
              img: [
                'http://60.205.203.205:8080/imgs/nsh10.jpg',
                'http://60.205.203.205:8080/imgs/nsh11.jpg',
                'http://60.205.203.205:8080/imgs/nsh12.jpg'
              ],
              src: '新华网',
              follow: '334跟帖'
            },
            {
              text: '史上最凶猛的“狗”，被非洲人成功驯服饿，十只藏獒都比不过',
              img: [
                'http://60.205.203.205:8080/imgs/nsh13.jpg',
                'http://60.205.203.205:8080/imgs/nsh14.jpg',
                'http://60.205.203.205:8080/imgs/nsh15.jpg'
              ],
              src: '青橙爱娱乐',
              follow: '4185跟帖'
            }
          ]
        }
      ]
    }
  },
  mounted () {
    if (this.active === 0) {
      this.$router.push({name: 'Headlines', params: {news: this.totalnews[0].feedio}})
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
