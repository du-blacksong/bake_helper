<template>
  <div id="app">
    <router-view :key="$route.path"/>
    <BottomBar v-if="$route.meta.isFooter"></BottomBar>
  </div>
</template>


<script>
import BottomBar from "@/components/BottomBar/index";
export default {
  components: {BottomBar}
}
</script>



<style lang="scss">
</style>
