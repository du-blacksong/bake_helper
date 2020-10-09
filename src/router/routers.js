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
const video =()=>import( '../views/video/video')
const lesson =()=>import( '../views/lesson/lesson')
const allLessons =()=>import( '../views/AllLessons/AllLessons')




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
      isFooter:true
    }
  },
  {
    path: '/baike',
    component: baike
  },
  {
    path: '/classify',
    component: classify
  },
  {
    path: '/university',
    component: university
  },
  {
    path: '/show',
    component: show,
    meta:{
      isFooter:true
    }
  },
  {
    path: '/questionAndAnswer',
    component: questionAndAnswer,
    meta:{
      isFooter:true
    },

  },
  {
    path: '/my',
    component: my,
  },
  {
    path: '/lessonSeries',
    component: lessonSeries
  },
  {
    path: '/search',
    component: search
  },
  {
    path: '/searchForm',
    component: searchForm
  },
  {
    path: '/video',
    component: video
  },
  {
    path: '/lesson',
    component: lesson
  },
  {
    path:'/allLessons',
    component: allLessons
  }

]

