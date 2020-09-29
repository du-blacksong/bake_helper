//路由器

import Vue from 'vue'
import VueRouter from 'vue-router'
import index from "../views/index";
import baike from '../views/baike/baike'
import classify from '../views/classify/classify'
import university from '../views/university/university'
import questionAndAnswer from '../views/questionAndAnswer/questionAndAnswer'
import show from '../views/show/show'
import my from '../views/my/my'
import lessonSeries from '../views/lessonSeries/lessonSeries'

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
    }
  },
  {
    path: '/my',
    component: my,
    meta:{
      isFooter:true
    }
  },
  {
    path: '/lessonSeries',
    component: lessonSeries
  }

]

