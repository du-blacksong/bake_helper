//路由器
import Vue from 'vue'
import VueRouter from 'vue-router'
//路由懒加载
const index =()=>import( "../views/index")
const baike =()=>import( '../views/baike/baike')
const classify =()=>import( '../views/classify/classify')
const university =()=>import( '../views/university/university')
const questionAndAnswer =()=>import( '../views/questionAndAnswer/questionAndAnswer')
const show =()=>import( '../views/show/show')
const my =()=>import( '../views/my/my')
const lessonSeries =()=>import( '../views/lessonSeries/lessonSeries')
const search =()=>import( '../views/search/search')
const searchForm =()=>import( '../views/searchForm/searchForm')
const searchLive =()=>import( '../views/searchLive/searchLive')
const video =()=>import( '../views/video/video')
const lesson =()=>import( '../views/lesson/lesson')
const allLessons =()=>import( '../views/AllLessons/AllLessons')
const dishrank =()=>import( '../views/dishrank')
const foodDetail =()=>import( '../views/foodDetail/foodDetail')




// import index from "../views/index";
// import baike from '../views/baike/baike'
// import classify from '../views/classify/classify'
// import university from '../views/university/university'
// import questionAndAnswer from '../views/questionAndAnswer/questionAndAnswer'
// import show from '../views/show/show'
// import my from '../views/my/my'
// import lessonSeries from '../views/lessonSeries/lessonSeries'




Vue.use(VueRouter)

export default [
  {
    path: '/',
    name: 'index',
    component: index,
    meta:{
      isFooter:true,
      metaInfo: {
        title: "烘焙帮",
        keywords: "面包，甜点，饼干，零食，西餐，面食",
        description: "该网站有sh0318一组合作完成"
      }
    }
  },
  {
    path: '/baike',
    component: baike,
    meta:{
      metaInfo: {
        title: "食品百科",
        keywords: "面包，甜点，饼干，零食，西餐，面食",
        description: "该网站有sh0318一组合作完成"
      }
    }
  },
  {
    path: '/classify',
    component: classify,
    meta:{
      metaInfo: {
        title: "分类",
        keywords: "面包，甜点，饼干，零食，西餐，面食",
        description: "该网站有sh0318一组合作完成"
      }
    }
  },
  {
    path: '/university',
    component: university,
    meta:{
      metaInfo: {
        title: "视频学堂",
        keywords: "面包，甜点，饼干，零食，西餐，面食",
        description: "该网站有sh0318一组合作完成"
      }
    }
  },
  {
    path: '/show',
    component: show,
    meta:{
      isFooter:true,
      metaInfo: {
        title: "烘焙圈",
        keywords: "面包，甜点，饼干，零食，西餐，面食",
        description: "该网站有sh0318一组合作完成"
      }
    }
  },
  {
    path: '/questionAndAnswer',
    component: questionAndAnswer,
    meta:{
      isFooter:true,
      metaInfo: {
        title: "烘焙问答",
        keywords: "面包，甜点，饼干，零食，西餐，面食",
        description: "该网站有sh0318一组合作完成"
      }
    },

  },
  {
    path: '/my',
    component: my,
    meta:{
      metaInfo: {
        title: "个人中心",
        keywords: "面包，甜点，饼干，零食，西餐，面食",
        description: "该网站有sh0318一组合作完成"
      }
    }
  },
  {
    path: '/lessonSeries',
    component: lessonSeries,
    meta:{
      metaInfo: {
        title: "新手教程",
        keywords: "面包，甜点，饼干，零食，西餐，面食",
        description: "该网站有sh0318一组合作完成"
      }
    }
  },
  {
    path: '/search',
    component: search,
    meta:{
      metaInfo: {
        title: "搜索",
        keywords: "面包，甜点，饼干，零食，西餐，面食",
        description: "该网站有sh0318一组合作完成"
      }
    }
  },
  {
    path: '/searchForm',
    component: searchForm,
    meta:{
      metaInfo: {
        title: "搜索",
        keywords: "面包，甜点，饼干，零食，西餐，面食",
        description: "该网站有sh0318一组合作完成"
      }
    }
  },
  {
    path: '/searchLive',
    component: searchLive,
    meta:{
      metaInfo: {
        title: "搜索",
        keywords: "面包，甜点，饼干，零食，西餐，面食",
        description: "该网站有sh0318一组合作完成"
      }
    }
  },
  {
    path: '/video',
    component: video,
    meta:{
      metaInfo: {
        title: "视频",
        keywords: "面包，甜点，饼干，零食，西餐，面食",
        description: "该网站有sh0318一组合作完成"
      }
    }
  },
  {
    path: '/lesson',
    component: lesson,
    meta:{
      metaInfo: {
        title: "课程介绍",
        keywords: "面包，甜点，饼干，零食，西餐，面食",
        description: "该网站有sh0318一组合作完成"
      }
    }
  },
  {
    path:'/allLessons',
    component: allLessons,
    meta:{
      metaInfo: {
        title: "所有课程",
        keywords: "面包，甜点，饼干，零食，西餐，面食",
        description: "该网站有sh0318一组合作完成"
      }
    }
  },
  {
    path:'/dishrank',
    component: dishrank,
    meta:{
      metaInfo: {
        title: "学生作业",
        keywords: "面包，甜点，饼干，零食，西餐，面食",
        description: "该网站有sh0318一组合作完成"
      }
    }
  },
  {
    path:'/foodDetail',
    component: foodDetail,
    meta:{
      metaInfo: {
        title: "食谱展示",
        keywords: "面包，甜点，饼干，零食，西餐，面食",
        description: "该网站有sh0318一组合作完成"
      }
    }
  }

]

