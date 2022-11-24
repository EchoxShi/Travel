<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl"/>
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>

            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'HomeWeekend',
        data() {
            return {
                
            }
        },
        props: {
            weekendList: Array
        }
    }
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
    .title
        background-color: #eee
        line-height: .8rem
        text-indent: .2rem
    .item-img-wrapper
        overflow: hidden
        height: 0
        padding-bottom: 37.09%
        .item-img
        /**这个width写在外层和图片上的效果可是不一样的。 */
            width: 100%
        
    .item-info
        padding: .1rem
        /**TODO: flex和min-width的奇妙组合,需要再理解  */
        .item-title
            ellipsis()
            line-height: .54rem
            font-size: .32rem
        .item-desc
            line-height: .4rem
            color: #ccc
            ellipsis()
            



</style>