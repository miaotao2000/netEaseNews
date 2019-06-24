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
                'https://nie.res.netease.com/r/pic/20181112/2de5ed29-88e1-478f-8b73-e81eaf2d0de0.jpg',
                'https://nie.res.netease.com/r/pic/20181112/c84f541f-4a9d-4e91-b771-16fe4d7c189d.jpg',
                'https://nie.res.netease.com/r/pic/20181112/5957e397-2269-4b78-93b9-49cf971ed9fa.jpg'
              ],
              src: '居然之居',
              follow: '339跟帖'
            },
            {
              text: '库尔德到底是什么人?为什么整个中东世界，都在恶心他们！',
              img: [
                'https://nie.res.netease.com/r/pic/20181112/b0066637-8175-40a5-8fd2-a1b252c18d8c.jpg',
                'https://nie.res.netease.com/r/pic/20181112/d6a0da64-8d8d-441f-9a10-07344762ab85.jpg',
                'https://nie.res.netease.com/r/pic/20181112/e47142f6-d42a-485d-b6a3-e208cf6d199a.jpg'
              ],
              src: '娱乐大傻猫',
              follow: '96跟帖'
            },
            {
              text: '龙生龙，凤生凤，那么张作霖生下的八个儿子，结局都怎么样呢？',
              img: [
                'https://nie.res.netease.com/r/pic/20181112/79b44269-730a-4eea-9e95-dc3936e412db.jpg',
                'https://nie.res.netease.com/r/pic/20181112/a956b20b-9cae-4168-aa8f-223b08328afa.jpg',
                'https://nie.res.netease.com/r/pic/20180817/68e7ea5a-8828-486e-91cd-1ec5ee4e2303.jpg'
              ],
              src: '唯爱娱乐圈',
              follow: ''
            },
            {
              text: '土总统，若美就S-400系统问题实施制裁 土方将反制',
              img: [
                'https://nie.res.netease.com/r/pic/20180817/27383152-0d5b-4ff1-b877-2440ede557c0.jpg',
                'https://nie.res.netease.com/r/pic/20180817/74b77336-b3f7-4b82-b35d-547afddacf50.jpg',
                'https://nie.res.netease.com/r/pic/20180817/66ad330b-84dc-4b85-956b-6ecabbf82ab6.jpg'
              ],
              src: '新华网',
              follow: '334跟帖'
            },
            {
              text: '史上最凶猛的“狗”，被非洲人成功驯服饿，十只藏獒都比不过',
              img: [
                'https://nie.res.netease.com/r/pic/20180817/4b8604e7-716f-48db-a1b8-d906e7444c29.jpg',
                'https://nie.res.netease.com/r/pic/20180817/3d5df27a-db73-444d-922a-ad8c541fceb0.jpg',
                'https://nie.res.netease.com/r/pic/20180817/2c5493d8-349e-4767-8f8c-9ad502f997f1.jpg'
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
