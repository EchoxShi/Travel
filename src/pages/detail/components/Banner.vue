<template>
<div>
    <div class="banner" @click="handleBannerclick">
    <div class="banner-img">
        <img  src="http://img1.qunarzz.com/sight/p0/2005/ad/adc09bb2c41b9f71a3.water.jpg_600x330_41f1059c.jpg"/>
    </div>
    <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-num"><span class="iconfont banner-icon">&#xe600;</span>{{bannerImgs.length}}</div>
    </div>
    </div>
    <fade-animation>
        <common-gallary :imgs='bannerImgs' v-show="showGallary" @close="handleBannerClose" ></common-gallary>
    </fade-animation>
</div>

 
</template>

<script>
import CommonGallary from 'common/gallary/Gallary.vue'
import FadeAnimation from 'common/fade/FadeAnimation.vue'

export default {
    name: "Banner",
    components: {
        CommonGallary,
        FadeAnimation
    },
    data () {
        return {
            showGallary:false,
            imgs: ['//qimgs.qunarzz.com/piao_qsight_provider_piao_qsight_web/100f0y000000ls13t3FB8.jpg_r_800x800_f89ae9bd.jpg','//qimgs.qunarzz.com/piao_qsight_provider_piao_qsight_web/100g0y000000lsp6y3D32.jpg_r_800x800_30b12a68.jpg']
        }
    }, 
    props: {
        sightName: String,
        bannerImg: String,
        bannerImgs: Array
    },

    methods: {
        handleBannerclick(){
            this.showGallary = true
        },
        handleBannerClose(){
            this.showGallary = false

        }
       
    }
}
</script>

<style lang="stylus" scoped>
.banner
    position: relative
    overflow: hidden
    height: 0 
    padding-bottom: 55%
    color: #fff
    .banner-img
        width:100%
    .banner-info
        display: flex
        position: absolute
        bottom: 0
        left: 0
        right: 0
        line-height: .6rem
        background-image: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
        .banner-title
            flex:1
            font-size: .32rem
            padding: 0 .2rem
        .banner-num
            height: .32rem
            line-height: .32rem
            margin-top: .14rem
            padding: 0 .4rem
            background-color: rgba(0,0,0,0.8)
            border-radius: .1rem
            font-size: .24rem
            .banner-icon
                font-size:.24rem


</style>