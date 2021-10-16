<template>
  <div id="app">
    <div id="loading" v-if="isLoading">
      <Loading />
    </div>

    <div id="error" v-else-if="storedData.state.error">
      <Error />
    </div>
    <div v-else class="content">
      <v-app>
        <v-main>
          <div class="main">
            <div>
              <div class="search">
                <v-text-field class="textfield" label="Search" append-icon="mdi-magnify" solo v-model="textSearch" @input="findPokemon">

                </v-text-field>
              </div>

              <div class="list" v-for="(pokemon, index) in storedData.state.selectedList" :key="index">
                <ItemList :pokemon="{...pokemon}" />
              </div>
            </div>
          </div>
        </v-main>
        <v-footer id="footer" width="auto" fixed>
          <v-container>
            <v-row justify="center" align-content="center">

              <v-btn class="button" v-if="selectedButton===0" rounded color="#F22539" @click="showAllPokemos()">
                <v-icon color="#F9F9F9">mdi-format-list-bulleted-square</v-icon>
                All
              </v-btn>
              <v-btn class="button" v-else rounded color="#BFBFBF" @click="showAllPokemos()">
                <v-icon color="#F9F9F9">mdi-format-list-bulleted-square</v-icon>
                All
              </v-btn>

              <v-btn class="button" v-if="selectedButton===1" rounded color="#F22539" @click="showFavorites()">
                <v-icon color="#F9F9F9">mdi-star</v-icon>
                Favorites
              </v-btn>
              <v-btn class="button" v-else rounded color="#BFBFBF" @click="showFavorites()">
                <v-icon color="#F9F9F9">mdi-star</v-icon>
                Favorites
              </v-btn>

            </v-row>
          </v-container>
        </v-footer>
      </v-app>
    </div>
  </div>
</template>
<script>
import {getPokemonList} from "@/controllers/pokemonController.js";
import store from '@/store';
import ItemList from '@/components/ItemList.vue'
import Loading from '@/components/Loading.vue'
import Error from '@/components/Error.vue'
export default {
  components: {
    ItemList,
    Loading,
    Error
  },
  data() {
    return{
      storedData: store,
      selectedButton: 0,
      isLoading: true,
      textSearch: "",
      tempList: [],
    };
  },
  beforeCreate() {
    let instance = this;
    instance.isLoading = true;
    
  },
  created() {
    let instance = this;    
    getPokemonList(35).then(() => {
      store.state.selectedList = store.state.pokemonList.slice();
      instance.selectedButton === 0;
      instance.isLoading = false;
    }).catch((err) => {
      console.log(err);
      instance.isLoading = false;
      store.state.error = true;
    });
       
  },
  methods: {
    findPokemon (){
      if(store.state.showFavorite){
        this.tempList = store.state.favoritePokemons.slice();
        this.tempList = this.tempList.filter(pokemon => pokemon.name.includes(this.textSearch.toLowerCase()));
        store.state.selectedList = this.tempList;
      }else{
        this.tempList = store.state.pokemonList.slice();
        this.tempList = this.tempList.filter(pokemon => pokemon.name.includes(this.textSearch.toLowerCase()));
        store.state.selectedList = this.tempList;      
      }
      
    },
    showAllPokemos(){
      this.selectedButton=0;
      store.state.showFavorite = false;
      store.state.selectedList = store.state.pokemonList.slice();
    },
    showFavorites(){
      this.selectedButton=1;
      store.state.showFavorite = true;
     store.state.selectedList = store.state.favoritePokemons.slice();
    },

  }
  
}
</script>
<style scoped>
#loading {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
}
#error {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
}

#app {
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.content {
  display: flex;
  justify-content: center;
}
.list {
  padding-bottom: 13px;
}
#footer {
  height: 80px;
  background-color: #f9f9f9;
}
@media (max-width: 800px) {
  .button {
    color: #f9f9f9;
    width: 150px;
    margin-left: 6px;
    margin-right: 6px;
  }
  .main {
    width: 315px;
    display: flex;
    padding-top: 30px;
    padding-bottom: 80px;
    flex-direction: column;
    align-content: center;
    gap: 13px;
  }
}

@media (min-width: 801px) {
  .button {
    color: #f9f9f9;
    width: 275px;
    margin-left: 12px;
    margin-right: 12px;
  }
  .main {
    width: 570px;
    display: flex;
    padding-top: 30px;
    padding-bottom: 80px;
    flex-direction: column;
    align-content: center;
    gap: 13px;
  }
}
</style>