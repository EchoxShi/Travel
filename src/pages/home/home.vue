<template>
<div>
    <home-header></home-header>
    <home-swiper></home-swiper>

</div>
</template>
<script>
import HomeHeader from './compontents/Header.vue'
import HomeSwiper from './compontents/Swiper.vue'

export default { 
    name: 'Home',
    components: {
        HomeHeader,
        HomeSwiper,
    }
}
</script>

<style scoped>

</style>
