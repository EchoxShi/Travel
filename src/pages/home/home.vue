<template>
<div>
    <home-header :city="city"></home-header>
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
            city: '' ,
            swiperList: [],
            iconList: [],
            recommendList: [],
            weekendList: [],

        }
    },
    methods: {
        getHomeInfo () {
            axios.get('/api/index.json')
            .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc (res) {
            console.log(res)
            res = res.data;
            if (res.ret && res.data) {
                const data = res.data;
                this.city = data.city;
                this.swiperList = data.swiperList;
                this.iconList = data.iconList;
                this.recommendList = data.recommendList;
                this.weekendList = data.weekendList;


            }
        }
    },
    mounted () {
        this.getHomeInfo()
    },
    
}
</script>

<style scoped> 

</style>
