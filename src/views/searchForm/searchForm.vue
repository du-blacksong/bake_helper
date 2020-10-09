<template>
  <div>
    <div class="top">
      <div class="topsearch">
        <img src="../../static/images/back.jpg" @click="$router.push('/search')">
        <div class="input">
          <span>餐包</span>
        </div>
        <span class="shipu">食谱</span>
      </div>

      <div class="nav">
        <div class="navItem">
          <span>综合排序</span>
          <div class="border"></div>
        </div>
        <div class="navItem">
          <span>做过最多</span>
          <div class="border" @click="sort='dishNum'"></div>
        </div>
        <div class="navItem">
          <span>达人食谱</span>
          <div class="border" @click="sort='master'"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "searchForm",
  data(){
    return{
      sort:''
    }
  }
}
</script>

<style scoped lang="scss">
.topsearch {
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  height: 88px;
  line-height: 88px;

  img {
    margin-top: 20px;
    width: 26px;
    height: 40px;
  }

  .input {
    text-align: center;
    font-size: 28px;
    height: 70px;
    width: 60%;
    background-color: #F5F7F9;
  }

  .shipu {
    font-size: 14px;
    color: #E98B71;
  }
}

.nav {
  display: flex;
  justify-content: space-around;

  span {
    font-size: 28px;
    color: #999999;
  }
  .border{
    width: 110px;
    height: 3px;
    background-color: #E98B71;
    margin-top: 10px;
  }
}
</style>
