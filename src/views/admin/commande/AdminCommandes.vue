<template>
<ion-page>
    <header-component pageTitle="Commandes" pageDefaultBackLink="/admin"></header-component>

    <ion-content>
            <ion-card v-for="commande in commandes" v-bind:key="commande.id">
                <ion-card-header>
                    <ion-card-title>{{ commande.nom }} {{ commande.prenom }} </ion-card-title>
                    <ion-card-subtitle> {{ commande.date }} </ion-card-subtitle>
                    <ion-card-subtitle> {{ commande.email }} | {{ commande.montant }} € | {{ commande.telephone }}</ion-card-subtitle>

                </ion-card-header>

                <ion-card-content>
                    <ion-button @click="showCommande(commande.id)">voir commande</ion-button>
                </ion-card-content>
            </ion-card>
            
    </ion-content>
</ion-page>
</template>

<script>
import {
    IonPage,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardSubtitle
} from "@ionic/vue";


import headerComponent from "../../../components/Header.vue";

export default {
    name: 'AdminCommandes',
    methods:{
        showCommande(commande_id){
            this.$router.replace("/admin/commande/"+commande_id);
        },
    },
    computed:{
        commandes(){
            return this.$store.getters.getCommandes()
        }
    },  
    components: {
        IonPage,
        IonContent,
        IonCard,
        IonCardHeader,
        IonCardContent,
        IonCardSubtitle,
        headerComponent,

    }

}
</script>
