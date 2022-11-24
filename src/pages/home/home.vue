<template>
<div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icon></home-icon>
</div>
</template>
<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcon from './components/Icons.vue'


export default { 
    name: 'Home',
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcon,
    }
}
</script>

<style scoped>

</style>
