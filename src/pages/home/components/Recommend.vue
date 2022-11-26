<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <!-- <router-link to="'/datail/' + item.id"> -->
            <router-link tag='li' :to="'/detail/' + item.id" 
            class="item border-bottom" 
            v-for="item of recommendList" 
            :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl"/>
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </router-link>

        </ul>
    </div>
</template>
<script>
    export default {
        name: 'HomeRecommend',
        data() {
            return {
                
            }
        },
        props: {
            recommendList:Array
        }
    }
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
    .title
        background-color: #eee
        line-height: .8rem
        text-indent: .2rem
    .item
        height: 1.9rem
        overflow: hidden
        display: flex
        .item-img
            width: 1.7rem
            height: 1.7rem
            margin: .1rem
        .item-info
            flex: 1
            /**TODO: flex和min-width的奇妙组合,需要再理解  */
            min-width: 0
            padding: .1rem
            .item-title
                ellipsis()
                line-height: .54rem
                font-size: .32rem
            .item-desc
                line-height: .4rem
                color: #ccc
                ellipsis()
            .item-button
                line-height: .44rem
                margin-top: .16rem
                background: #ff9300
                padding: 0 .2rem 
                border-radius: .06rem
                color: #fff



</style>