<template>
  <ion-header>
    <ion-toolbar color="primary">

          <ion-buttons slot="start">
            <ion-button slot="start">
              <ion-back-button text="Retour" :default-href="pageDefaultBackLink"></ion-back-button>
            </ion-button>
          </ion-buttons>

          <ion-title>{{pageTitle}}</ion-title>

          <ion-buttons slot="end">
            <ion-button size="medium" @click="logout">
            Logout
            </ion-button>
          </ion-buttons>

    </ion-toolbar>
  </ion-header>
</template>

<script>
import { defineComponent } from 'vue'
import{
    IonHeader, 
    IonTitle, 
    IonToolbar,
    IonButtons,
    IonButton,
    IonBackButton
} from "@ionic/vue"

export default defineComponent({
  name: "headerComponent",
  components : {
    IonHeader, 
    IonTitle, 
    IonToolbar,
    IonButtons,
    IonButton,
    IonBackButton
  },
  props : [
    "pageTitle",
    "pageDefaultBackLink"
  ],
  methods:{
    logout(){
      this.$store.dispatch("logout")
      this.$router.replace('/login')
    }
  }
})

</script>
