import axios from '@/api/ajax'
const state= {
  /*
  食谱格式
  {
   classifyId,
   name,
   list,对应右侧图片列表
  }
  list:[]
  * */
  classify:[]
}
const mutations= {
  RECOMMEND(state,data){
    state.classify.push(data)
  },
  ALL(state,data){
    state.classify.push(...data)
  }
}
const actions={
  async recommend({commit},data){
    const res=await axios.get('/classify/getRecommend')
    commit('RECOMMEND',{
      name:'推荐',
      classifyId:0,
      list:[{
        name:res.data.data[0].name,
        classifyId:1,
        list:res.data.data[0].classifys
      }]
    })

  },
  async all({commit},data){
    const res=await axios.get('classify/get')
    commit('ALL',res.data.data.classify)
  }
}
const getters ={
  recommendnav(state){
    return state.classify.map(item=>{
      return{
        name:item.name,
        classifyId:item.classifyId
      }
    })
  }
}
export default {
  state,
  mutations,actions,getters
}