import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import {userLoginInfo, industrialGroup,}  from './userloginInfo'

Vue.use(Vuex);

const state = {
    isLogin:false,
    token: null,
    username: '',
    sessionId: '',
    userLoginInfo: userLoginInfo,
    industrialGroup:industrialGroup,
    currentPageName: "", //用于在wx-header组件中显示当前页标题
    currentTabIndex: 0,
    headerStatus: true, //显示（true）/隐藏（false）wx-header组件
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})
