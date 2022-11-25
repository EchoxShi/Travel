<template>
  <div id="app">
    <!-- 使用缓存 路由加载过一次之后就放到内存之后，以供下次使用-->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
