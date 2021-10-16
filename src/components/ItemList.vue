<template>
  <div class="item">
    <PokemonDetails v-if="this.showData" :pokemon="{...this.pokemon}" :close="closePokemonInfo" />
    <v-list-item>
      <v-list-item-content>
        <div id="item_content">
          <div id="pokemonName" @click="showPokemonInfo()">
            <v-list-item-title>{{this.pokemon.name[0].toUpperCase() + this.pokemon.name.slice(1)}}</v-list-item-title>
          </div>
          <v-btn id="button" rounded v-if="this.pokemon.isFavorite" icon @click="setFavorite()">
            <v-icon color="#ECA539">mdi-star</v-icon>
          </v-btn>
          <v-btn id="button" rounded v-else icon @click="setFavorite()">
            <v-icon color="#BFBFBF">mdi-star</v-icon>
          </v-btn>
        </div>
      </v-list-item-content>
    </v-list-item>

  </div>
</template>
<script>
import store from '@/store';
import PokemonDetails from "./PokemonDetails.vue"
export default {
  components: {
    PokemonDetails
  },
  data() {
    return {
      showData: false,
    };
  },
  props:{
    pokemon: {
        name: String,
        height: Number,
        weight: Number,
        url: String,
        isFavorite: Boolean,
    }
  },
  methods: {
      closePokemonInfo(){
        this.showData = false;
      },
      showPokemonInfo(){
        this.showData = true;
      },       
      setFavorite(){
          if(this.pokemon.isFavorite){
            this.pokemon.isFavorite = false;
            store.commit('deleteFavorite', this.pokemon);
          }else{
            this.pokemon.isFavorite = true;
            store.commit('addFavorite', this.pokemon);
          }
      }
    }
  
};
</script>
<style scoped>
#pokemonName {
  display: flex;
  justify-content: flex-start;
  align-content: center;
  box-sizing: content-box;
  width: 100%;
  height: 60px;
}

#item_content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: content-box;
  width: 100%;
}
.item {
  background-color: #f9f9f9;
  border-radius: 5px;
  font-weight: 400;
  font-size: 22;
}

.item:hover {
  background-color: #e8e8e8;
  cursor: pointer;
}

#button {
  position: relative;
  bottom: 0;
  top: 0;

  background-color: #f5f5f5;
}
</style>