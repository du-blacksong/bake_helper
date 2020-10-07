<!--这里的烘焙帮的介绍，有四个图标的那个-->
<template>
  <div class="bottom">
    <img alt="" title=""
         src="https://image.hongbeibang.com/FgyNuZ8yE795vzF-O4lGF3G5Caxr?551X245&amp;imageView2/1/w/551/h/242"
         style="width: 130px; height: 57.2px; background: none;">
    <div class="bottomdesc">
      烘焙帮学堂，是由烘焙帮推出的课程品牌，通过官方自制的教学视频，用科学的烘焙配方、细致的步骤讲解、贴心的答疑服务，让烘焙更简单！
    </div>
    <div class="bottomicon">
      <div class="iconitem">
        <img alt="" title=""
             src="https://image.hongbeibang.com/FvihrbO1twdtKSkz2WqB9KxUjjeg?100X116&amp;imageView2/1/w/100/h/116"
             style="width: 50px; height: 58px; background: none;">
        <div class="iconitemdesc">蛋糕</div>
      </div>
      <div class="iconitem">
        <img alt="" title=""
             src="https://image.hongbeibang.com/Frs8TmZhk4PrxBY2cvA9e3jbbdrB?100X116&amp;imageView2/1/w/100/h/116"
             style="width: 50px; height: 58px; background: none;">
        <div class="iconitemdesc">甜点</div>
      </div>
      <div class="iconitem">
        <img alt="" title=""
             src="https://image.hongbeibang.com/ForyDTluoYKimnQmobG6agmowKzy?100X116&amp;imageView2/1/w/100/h/116"
             style="width: 50px; height: 58px; background: none;">
        <div class="iconitemdesc">面包</div>
      </div>
      <div class="iconitem">
        <img alt="" title=""
             src="https://image.hongbeibang.com/FuCKHBljrYAFuTjTs0B1fkNcUhWw?100X116&amp;imageView2/1/w/100/h/116"
             style="width: 50px; height: 58px; background: none;">
        <div class="iconitemdesc">中式点心</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "hpbDesc"
}
</script>

<style scoped lang="scss">
.bottom {
  background-color: #fff;

  .bottomdesc {
    font-weight: 300;
    font-size: 28px;
    line-height: 44px;
    color: #313131;
  }

  .bottomicon {
    display: flex;
    flex-direction: row;
    margin-top: 30px;

    .iconitem {
      flex: 1;
      justify-content: center;
      align-items: center;
      display: flex;
      flex-direction: column;
      cursor: pointer;

      .iconitemdesc {
        font-size: 24px;
        color: #313131
      }
    }
  }
}
</style>