<template>
<div>
  <div class="search">  
    <input class="search-input" type="text" v-model="keyword" placeholder="输入城市名或拼音"/>
  </div>
  <div class="search-content" v-show="keyword" ref="search">
    <ul>
      <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
      <li class="search-item border-bottom" v-show="hasList">没有找到匹配数据</li>
    </ul>
  </div>
</div> 


</template> 

<script>
import Bscroll from "better-scroll"
export default {
    name: "CitySearch",
    data() {
      return {
        keyword:'',
        list: [],
        timer: null
      }
    },
    props: {
      cities: Object 
    },
    computed:{
      hasList() {
        return !this.list.length
      }
    },
    methods: {
      handleCityClick(city){
        this.$store.commit('changeCity',city)
        this.$router.push('/')
      }
    },
    watch: {
      keyword () {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        if (!this.keyword) {
          console.log("xxx")
          this.list = []
          return
        }
        this.timer = setTimeout(() => {
          const result = []
          for (let i in this.cities){
            this.cities[i].forEach((value) => {
              if (value.spell.indexOf(this.keyword) > -1 || 
                  value.name.indexOf(this.keyword) > -1){
                result.push(value)
              }
            })
          }
          this.list = result
        }, 100)

      }
    },
    mounted () {
      this.scroll = new Bscroll(this.$refs.search)
    }
}
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl"
    .search
        height: .72rem
        padding: 0 .1rem
        background-color: $bgColor
        .search-input
            box-sizing: border-box
            padding: 0 .1rem
            width: 100%
            height: .62rem
            line-height: .62rem
            text-align: center
            border-radius: .06rem
            color: #666
    .search-content
      z-index: 1
      position: absolute
      top:  1.58rem
      left: 0
      right: 0
      bottom: 0
      color:red
      background-color: #eee
      .search-item
        background-color: #fff
        line-height: .62rem
        color: #666
        padding-left: .2rem

</style>