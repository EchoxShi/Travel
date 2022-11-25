<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hot" :key="item.id"  @click="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
          
        </div>
      </div>
      <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list" v-for="innerItem of item" :key="innerItem.id">
          <div class="item border-bottom" @click="handleCityClick(innerItem.name)">{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations, mapState} from 'vuex'
export default {
  name: "CityList",
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  props: {
    cities: Object,
    hot: Array,
    letter: String,
  },
  computed: {
    ...mapState({
        currentCity: 'city'
    })
  },
  watch: {
    letter () {
        console.log(this.letter)
        if(this.letter){
            const element = this.$refs[this.letter][0]
            // 是better-scroll 的方法
            this.scroll.scrollToElement(element)
        }
    }
  },
  methods: {
    handleCityClick(city){
        this.$store.commit('changeCity',city)
        this.$router.push('/')
    },
    // ...mapMutations['handleCityClick']
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

/* *TODO 不懂这个用法 ,应该是stylus 的 */
.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.border-bottom {
  &:before {
    border-color: #ccc;
  }
}

.list {
  position: absolute;
  top: 1.58rem;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;

  .title {
    line-height: 0.54rem;
    background-color: #eee;
    padding-left: 0.2rem;
    color: 666;
    font-size: 0.26rem;
  }

  .button-list {
    overflow: hidden;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;

    .button-wrapper {
      float: left;
      width: 33.33%;

      .button {
        text-align: center;
        margin: 0.1rem;
        padding: 0.1rem 0;
        border-radius: 0.06rem;
        border: 0.02rem solid #ccc;
      }
    }
  }

  .item-list {
    .item {
      line-height: 0.76rem;
      padding-left: 0.2rem;
    }
  }
}
</style>