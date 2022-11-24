<template>
    <div class='wraper'>
        <swiper :options="swiperOption"  v-if="showSwiper">
            <!-- slides -->
            <swiper-slide v-for="item of swiperList" :key="item.id"> 
                <img class='swiper-img' :src='item.imgUrl'>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    data: function() {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true,
            },
        }
    },
    props: {
        swiperList: Array,
    },
    computed: {
        showSwiper () {
            return this.swiperList.length
        }
    }

}

</script>
/** scoped 指修饰当前组件中样式名字，所以改轮播图页码颜色的时候没有反应，这时可以用样式穿透,控制子组件的样式*/
<style lang='stylus' scoped>
    .wraper >>> .swiper-pagination-bullet-active
        background: #fff 
    .wraper
        background-color: #eee
        overflow: hidden
        width: 100%
        /**如果写height:31.25%是相对父元素的高度。 不是相对于它本身的高度，所以不适合用于保持宽高比。*/
        height: 0
        padding-bottom: 31.25%
        .swiper-img
            width: 100%

</style>