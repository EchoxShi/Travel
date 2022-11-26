<template>
    <transition>
        <slot></slot>
    </transition>
</template>

<script>
export default {
    name: 'FadeAnimation',
    mounted() {
        console.log("wwwwwwwwwwwwwwwwwwwwwwwwwwww")
    }
};
</script>

<style lang="stylus" >
.v-enter, .v-leave-to
    opacity: 0
.v-enter-activate , .v-leave-activate
    transition: opacity  .5s

</style>