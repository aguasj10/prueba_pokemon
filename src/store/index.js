import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemonList: [],
    favoritePokemons: [],
    selectedList: [],
    error: false,
    showFavorite: false,
  },
  mutations: {
    setError (state, payload) {
      state.error = payload;
    },
    setAllPokemons (state, payload) {
      state.pokemonList = payload;
    },

    addFavorite (state, payload) {
      const temp = state.favoritePokemons.slice();
      temp.push(payload);
      state.favoritePokemons = temp;

      const temp2 = state.pokemonList.slice();
      const index2 = state.pokemonList.findIndex(pokemon => pokemon.name === payload.name);
      temp2[index2] = payload;
      state.pokemonList = temp2;

      if(state.showFavorite){     
          state.selectedList = state.favoritePokemons.slice();        
      }else{
        state.selectedList = state.pokemonList.slice();
        
      }
    },
    deleteFavorite (state, payload) {
      
      const temp = state.favoritePokemons.slice();
      const index = state.favoritePokemons.findIndex(pokemon => pokemon.name === payload.name);
      temp.splice(index, 1);
      state.favoritePokemons = temp;
      
      const temp2 = state.pokemonList.slice();
      const index2 = state.pokemonList.findIndex(pokemon => pokemon.name === payload.name);
      temp2[index2] = payload;
      state.pokemonList = temp2;

      if(state.showFavorite){
        state.selectedList = state.favoritePokemons.slice();
      }else{
        state.selectedList = state.pokemonList.slice();
        
      }
      
    }
  },
  actions: {
  },
  modules: {
  }
})
