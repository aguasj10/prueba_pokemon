<template>
  <div>
    <v-img :src="require('../assets/images/loader.png')" class="App-logo" contain height="200" />
  </div>
</template>
<script>
export default{
    
}
</script>
<style scoped>
.App-logo {
  margin: auto auto;
  width: 60px;
  height: 60px;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 1s linear;
  }
}
@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
