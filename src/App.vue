<template>
  <div id="app">
    <!-- 使用缓存 路由加载过一次之后就放到内存之后，以供下次使用-->
    <!-- 默写页面不需要缓存，使用exclude,记得不要加 .vue -->
    <keep-alive exclude="Detail">
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
