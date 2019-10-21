import Vue from 'vue'
import Vuex from 'vuex'
import { loadFromStorage, saveToStorage } from '../utiles/utiles'

Vue.use(Vuex)

const favorites = loadFromStorage() || []

export default new Vuex.Store({
  state: {
    degreeUnit: 'F',
    favorites,
    theme:'light'
  },
  getters: {
    //theme
    theme: state => state.theme,
    //degrees
    getDegreeUnit: state => state.degreeUnit,

    //favorites
    getIsFavorite: state => key => Boolean(state.favorites.find(favorite => favorite.location.Key === key)),
    favorites: state => state.favorites
  },
  mutations: {
    //theme 
    changeTheme(state) {
      if (state.theme === 'light') state.theme = 'dark'
      else state.theme = 'light'

      console.log('state.theme ',state.theme );
      
    },
    //degrees
    toogleDegreeUnit(state) {
      if (state.degreeUnit === 'C') state.degreeUnit = 'F'
      else state.degreeUnit = 'C'
    },

    //favorites
    toggleFavorite(state, { payload: { location } }) {
      console.log('toggleFavorite location', location);

      const isFound = Boolean(state.favorites.find(favorite => favorite.location.Key === location.location.Key))
      console.log('isFound',isFound);
      
      if (isFound) state.favorites = state.favorites.filter(favorite => favorite.location.Key !== location.location.Key)
      else {
        state.favorites.push(location)
      }
      saveToStorage(state.favorites)
    },

  },
  actions: {
  },
  modules: {
  }
})
