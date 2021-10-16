<template>

  <div class="popup">

    <v-card class="popup-inner">
      <v-btn id="closeButton" :ripple="false" icon @click="closePopUp()">
        <v-icon color="#ffffff">
          mdi-close-circle
        </v-icon>
      </v-btn>
      <div class="imagePokemon">
        <v-img :src="pokemon.url" contain height="180px"></v-img>
      </div>
      <v-divider class="mx-4"></v-divider>
      <v-card-text>
        <b>Name: </b>{{this.pokemon.name}}
      </v-card-text>
      <v-divider class="mx-4"></v-divider>

      <v-card-text>
        <b>Weight: </b>{{this.pokemon.weight}}
      </v-card-text>
      <v-divider class="mx-4"></v-divider>

      <v-card-text>
        <b>Height: </b>{{this.pokemon.height}}
      </v-card-text>
      <v-divider class="mx-4"></v-divider>

      <v-card-text>

        <b>Types: </b>{{this.pokemon.height}}

      </v-card-text>

      <div id="buttonsActions">

        <v-btn :style="{
           backgroundColor : '#F22539',
           color: '#FFFFFF'
           }" elevation="2" rounded @click="share()">Share to my friends</v-btn>

        <v-btn id="button" rounded v-if="this.pokemon.isFavorite" icon @click="setFavorite()">
          <v-icon color="#ECA539">mdi-star</v-icon>
        </v-btn>
        <v-btn id="button" rounded v-else icon @click="setFavorite()">
          <v-icon color="#BFBFBF">mdi-star</v-icon>
        </v-btn>

      </div>
    </v-card>
    <Dialog v-if="this.dialog" :closeDialog="closeDialog" />
  </div>

</template>
<script>
import store from '@/store';
import Dialog from '@/components/Dialog.vue'
export default {
  components: {
    Dialog
  },
    data() {
        return{
          dialog: false,
        }
    },
    props:{      
      pokemon: {
        name: String,
        height: Number,
        weight: Number,
        url: String,
        isFavorite: Boolean,
      },
      close: {
        type: Function        
      },

  },
    methods: {
    closeDialog(){
      this.dialog = false;
    },
    share(){
      try {
        navigator.clipboard.writeText(this.pokemon.name+","+this.pokemon.weight+","+this.pokemon.height);
        this.dialog = true;
      } catch (error) {
        console.log(error);
      }
    },
    closePopUp(){
        if (this.close) {
          this.close();
        }
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
  },
}
</script>
<style scoped>
#pokemonImage {
}
#buttonsActions {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#closeButton {
  position: absolute;
  right: 0;
  top: 0;
}
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}
.popup:hover {
  cursor: default;
}
@media (max-width: 800px) {
  .popup .popup-inner {
    position: relative;
    background: #fff;
    width: 315px;
    height: 506px;
  }
  .imagePokemon {
    background-image: url("../assets/images/background.png");
    background-color: transparent;
    object-fit: cover;
    width: 315px;
    height: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
@media (min-width: 801px) {
  .popup .popup-inner {
    position: relative;
    background: #fff;
    width: 570px;
    height: 506px;
  }
  .imagePokemon {
    background-image: url("../assets/images/background.png");
    background-color: transparent;
    object-fit: cover;
    width: 570px;
    height: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>