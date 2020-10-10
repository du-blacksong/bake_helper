<template>
  <div class="foodDetailWrap">
      <div class="foodDetailHeader">
          <img src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt="">
          <div class="foodDetailCollect">收藏</div>
      </div>
      <img :src="recipe.coverImage" alt="">
      <div class="foodDetailComment">
          <div class="foodDetailTitle">{{recipe.coverTitle}}</div>
          <div class="foodDetailContent">
              <div>
              <img :src="recipe.clientImage" alt="">
              </div>
              <div class="foodDetailContentRight">
                <div class="foodDetailName">{{recipe.clientName}}</div>
                <div class="addFocus">+关注</div>
              </div>
          </div>
            <p>{{recipe.coverSummary}}</p>
          <div>
              <div></div>
              <div>
                  <div></div>
                  <input type="text">
                  <div></div>
                  <span></span>
                  <span></span>
              </div>
              <div>
                  <div></div>
              </div>
              <div>
                  <div></div>
                  <img src="" alt="">
                  <p></p>
              </div>
          </div>
      </div>
  </div>
</template>


<script>
export default {
  name: "foodDetail",
  data(){
     return{
      contentId:0,
      recipe:{}
     }
  },
  mounted () {
   this.contentId=this.$route.query.contentId
   console.log(this.contentId)
   this.getQuestionDetail(this.contentId)
  },
  methods:{
      async getQuestionDetail(contentId){
          console.log(contentId)
    //   this.contentId=contentId
      const {data} =await this.$axios(`/recipe/get?contentId=${contentId}`)
      this.recipe=data.data.recipe
      console.log(this.recipe)
    //   this.recipe=data.recipe
    //   console.log(this.recipe)
  }
 }
}
</script>
<style scoped lang="scss">
.foodDetailWrap{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 0 36px;
    .foodDetailHeader{
     background: #FFFFFF;
     height: 88px;
     z-index: 6;
     position: relative;
     top: 0;
     left: 0;
     right: 0;
     padding: 0 36px;
     margin: 0 auto;
     max-width: 1200px;
     box-sizing: border-box;
        img{
         width: 54px;
         height: 54px;
         margin: 19px 0;
        }
        .foodDetailCollect{
         color: #E98B71;
         border: 2px solid;
         border-color: #E98B71;
         border-radius: 8px;
        position: absolute;
        right: 20px;
        top: 20px;
        border-radius: 40px;
        box-sizing: border-box;
        margin: 0;
        text-align: center;
        font-size: 24px;
        line-height: 56px;
        width: 100px;
        height: 60px;
        cursor: pointer;
        }
    }
    .foodDetailComment{
      .foodDetailTitle{
       color: #4A4945;
       line-height: 75px;
       font-size: 52px;
       font-weight: bold;
       word-wrap: break-word;
       position: relative;
       margin: 32px 0;

      }
      .foodDetailContent{
       border-top: 2px solid #F1F1F1;
       margin-top: 30px;
       display: flex;
       img{
           width:70px;
           height: 70px;
       }
       .foodDetailContentRight{
           display: flex;
           flex: 1;
           justify-content:space-between;
            .foodDetailName{
            }
            .addFocus{
            }
       }
      }
    }
}
</style>
