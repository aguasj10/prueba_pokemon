<template>
  <div id="dialog">
    <v-card id="dialog-card">
      <v-card-title class="">
        Notification
      </v-card-title>

      <v-card-text>
        Text copied to clipboard :)
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="closeDialog()">
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
    data() {
        return{
        }
    },
    props:{     
      closeDialog: {
        type: Function        
      },
  },
}
</script>
<style scoped>
#dialog {
  position: fixed;
  z-index: 999;
}
#dialog-card {
  width: 250px;
  height: 150px;
}
</style>