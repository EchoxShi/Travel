<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
            </div>
        <div class="header-input">
            <span class="iconfont">&#xe600;</span>请输入城市、景点、游玩主题
            </div>
        <div class="header-right">
            城市<span class="iconfont">&#xe771;</span>
            </div>
    </div>
    
</template>
<script>
export default {
    name: 'Home'
}
</script>

<style lang="stylus" scoped>
/* 1rem = html fontsize = 50px,在reset。css中设置的。*/
/* 在样式中引入样式要用 @import*/
 /*   @import "../../../assets/styles/varibles.styl";*/
 /* 太长了，想写简单点，可以用@ 符号代表 src ,但是在 style 中需要加上~*/
 /*@import "~@/assets/styles/varibles.styl"*/
 /*还是太长了，在webpack.base.conf.js中起个别名 */
 @import "~styles/varibles.styl"
    .header
        display: flex
        line-height: .86rem
        background-color:  $bgColor
        color: #fff
        .header-left
            width: .64rem
            float: left
            .back-icon
                text-align: center
                font-size: .4rem
        .header-input
            flex: 1
            padding-left: .2rem
            height: .64rem
            line-height: .64rem
            color: #ccc
            margin-top: .12rem
            margin-left: .2rem
            background: #fff
            border-radius: .1rem
        .header-right
            width: 1.24rem
            float: right
            text-align: center
</style>
