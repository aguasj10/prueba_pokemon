<template>
  <div class="Error">
    <h1>Uh-oh!</h1>
    <p>You look lost on your journey!</p>
    <div id="button">
      <v-btn :style="{
           backgroundColor : '#F22539',
           color: '#FFFFFF'
           }" elevation="2" rounded @click="goToHome()">Go back home</v-btn>
    </div>
  </div>
</template>
<script>
export default {
    methods:{
        goToHome(){
            this.$router.push({ path: '/' })
        }
    }

}
</script>
<style scoped>
.Error {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin: auto auto;
}

#button {
  padding-top: 16px;
}

.Error h1 {
  font-size: 26px;
  font-weight: 700;
}
.Error p {
  padding: 16px;
  font-size: 18px;
  font-weight: 300;
  text-align: center;
}
</style>