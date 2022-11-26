<template>
    <div class="container" @click="handleGallaryclick">
        <div class="wrapper">
            <swiper :options="swiperOptions"  >
                <!-- slides -->
                <swiper-slide v-for="(item,index) of imgs" :key="index"> 
                    <img class='swiper-img'  :src="item">
                </swiper-slide>
                
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CommonGallary',
    props:{
        imgs: {
            type: Array,
            default () {
                return []
            }
        }
    },
    data() {
        return {
            swiperOptions:{
                pagination: '.swiper-pagination',
                paginationType: 'fraction',
                observerParents:true,
                observer:true
            }
            
        };
    },

    mounted() {
        
    },

    methods: {
        handleGallaryclick(){
            this.$emit('close')
        }
    },
};
</script>

<style lang="stylus" scoped>
.container
    z-index: 99
    position: fixed
    display: flex
    flex-direction: column
    justify-content: center
    top: 0
    left: 0
    right: 0
    bottom: 0
    background-color: #000
    .wrapper
        width: 100%
        height: 0
        padding-bottom: 100%
        .swiper-img
            flex:1
            width: 100%
        .swiper-pagination
            color: #fff
            bottom: 1rem
</style>