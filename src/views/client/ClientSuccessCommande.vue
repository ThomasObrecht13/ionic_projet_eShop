<template>
<ion-page>
    <header-component></header-component>

    <ion-content>
        <ion-label>Merci pour votre commande</ion-label>
        <br>
        <ion-button @click="showCategories()" >Retour à la boutique</ion-button>

    </ion-content>
</ion-page>
</template>

<script>
import {
    IonPage,
    IonContent,
    IonButton,
    IonLabel,
} from "@ionic/vue";


import headerComponent from "../../components/Header.vue";

export default {
    name: 'ClientSuccessCommande',
    methods:{
        showCategories(){
            this.$router.replace('/client/categories')
        }
    },
    components: {
        IonPage,
        IonContent,
        IonButton,
        IonLabel,
        headerComponent,

    }

}
</script>
