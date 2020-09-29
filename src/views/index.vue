
<template>
<!-- 首页 -->
  <div>
    <!--  顶部导航栏-->
      <router-link to="baike">技巧百科</router-link>
      <router-link to="university">视频学堂</router-link>
      <router-link to="lessonSeries?contentId=10533">新手教程</router-link>
      <router-link to="classify">食谱分类</router-link>

    <!--  底部导航栏-->
    <BottomBar v-if="$route.meta.isFooter"></BottomBar>
  </div>

</template>

<script>
import BottomBar from "@/components/BottomBar";
export default {
  name: "index",
  components:{
    BottomBar
  },
  mounted() {
    this.$axios('/education/getIndexByWeb')
  }
}
</script>

<style scoped>

</style>
