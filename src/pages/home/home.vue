<template>
<div>
    <home-header ></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icon :iconList="iconList"></home-icon>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
</div>
</template>
<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcon from './components/Icons.vue'
import HomeRecommend from './components/Recommend.vue'
import HomeWeekend from './components/Weekend.vue'
import axios from 'axios'
import {mapState} from 'vuex'


export default { 
    name: 'Home',
    components: {
        HomeHeader,
        HomeSwiper, 
        HomeIcon,
        HomeRecommend,
        HomeWeekend,
    },
    data () {
        return {
            lastCity: '',
            swiperList: [],
            iconList: [],
            recommendList: [],
            weekendList: [],

        }
    },
    computed: {
        ...mapState(['city'])
    },
    methods: {
        getHomeInfo () {
            axios.get('/api/index.json?city=' + this.city)
            .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc (res) {
            console.log(res)
            res = res.data;
            if (res.ret && res.data) {
                const data = res.data;
                
                this.swiperList = data.swiperList;
                this.iconList = data.iconList;
                this.recommendList = data.recommendList;
                this.weekendList = data.weekendList;


            }
        } 
    },
    mounted () {
        console.log("mounted")
        this.lastCity = this.city
        this.getHomeInfo()
    },
    // 在使用keep-alive 时有这个生命周期函数
    // 页面重新被显示的时候触发
    activated () {
        if(this.lastCity !== this.city){
            this.lastCity = this.city
            this.getHomeInfo()
        }
        console.log("activated")
    },
    
}
</script>

<style scoped> 

</style>
