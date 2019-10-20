import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    degreeUnit: 'F'
  },
  getters: {
    getDegreeUnit: state => state.degreeUnit 
  },
  mutations: {
    toogleDegreeUnit(state) {
      // console.log('toogleDegreeUnit',state);
      if(state.degreeUnit === 'C') state.degreeUnit = 'F'
      else state.degreeUnit = 'C'
      
    }
  },
  actions: {
  },
  modules: {
  }
})
