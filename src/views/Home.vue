<template>
  <div class="home">
    <div id="image">
      <v-img :src="require('../assets/images/pikachu_logo.png')" class="my-3" contain height="200" />
    </div>
    <h2>Welcome to Pokédex</h2>
    <p>The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world.</p>
    <div id="button">
      <v-btn :style="{
           backgroundColor : '#F22539',
           color: '#FFFFFF'
           }" elevation="2" rounded @click="goToPrincipal()">Get started</v-btn>
    </div>
  </div>

</template>

<script>
export default {
  methods: {
    goToPrincipal(){
      this.$router.push({ path: '/principal' })
    } 
  }

}
</script>

<style scoped>
.home {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#button {
  padding-top: 32px;
}

#image {
  padding-bottom: 32px;
}

.home h2 {
  font-size: 26px;
  font-weight: 700;
}
.home p {
  padding: 32px;
  font-size: 18px;
  font-weight: 300;
  text-align: center;
}
</style>
