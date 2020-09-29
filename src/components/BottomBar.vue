<template>
  <div class="bottomBar">
    <router-link to="/">
      <i></i>
      学烘焙
    </router-link>
    <router-link to="show">烘焙圈</router-link>
    <router-link to="questionAndAnswer">问答</router-link>
    <router-link to="my">小窝</router-link>
  </div>
</template>

<script>
export default {
  name: 'BottomBar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.bottomBar{
  width: 100%;
  display: flex;
  position: absolute;
  bottom: 0;
  justify-content: space-around;
}
</style>
