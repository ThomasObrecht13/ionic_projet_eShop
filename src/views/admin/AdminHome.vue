<template>
  <ion-page>
    <header-component pageTitle="Admin"></header-component>

    <ion-content>
      <ion-buttons>
        <ion-item>

          <ion-button expand="full" color="success" @click="showCategories">Gérer les catégories</ion-button>
          <ion-button expand="full" color="success" @click="showCommandes">Mes commandes</ion-button>
        </ion-item>

      </ion-buttons>
    </ion-content>
  </ion-page>
</template>
<script>
import{
  IonContent,
  IonPage,
    IonItem,
} from "@ionic/vue"

import headerComponent from "../../components/Header.vue"


export default ({
  name:"AdminHome",
  data(){
    return{
    }
  },
  components : {
    IonContent,
    IonPage,
    IonItem,
    headerComponent
  },
   methods:{
    showCategories(){
      this.$router.replace('/admin/categories')      
    },
    showCommandes(){
      this.$router.replace('/admin/commandes')      
    },

  }
})


</script>