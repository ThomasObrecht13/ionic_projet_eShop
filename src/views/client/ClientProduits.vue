<template>
<ion-page>
    <header-component pageTitle="Produits" pageDefaultBackLink="/client/categories"></header-component>

    <ion-content>
        <ion-list>
            <ion-item v-for="produit in produits" v-bind:key="produit.id">
                
                <ion-thumbnail slot="start">
                    <ion-img :src="produit.image" :alt="produit.libelle"></ion-img>
                </ion-thumbnail>
                
                <ion-label>{{ produit.libelle}}</ion-label>
                <ion-label>{{ produit.prix}} €</ion-label>

                <ion-button @click="showProduitDetails(produit.id)">Details</ion-button>

            </ion-item>

        </ion-list>
    </ion-content>
</ion-page>
</template>

<script>
import {
    IonPage,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonButton,
    IonThumbnail,
    IonImg,
} from "@ionic/vue";


import headerComponent from "../../components/Header.vue";

export default {
    name: 'AdminProduits',
    created(){
        this.getProduits()
    },
    data(){
        return{
            categorie_id: 1,
        }
    },
    methods:{
        getProduits(){
            this.$store.dispatch("getProduits");
        },
        showProduitDetails(produit_id){
            this.$router.replace('/client/produit/'+produit_id)      
        },
      
    }, 
    watch:{
        '$route.params.id': {
            handler : function(id){
                this.categorie_id = parseInt(id)
            },
            deep:true,
            immediate: true
        }
    },
    computed:{
        produits(){
            return this.$store.getters.getProduitsbyCategorie(this.categorie_id)
        }
    },  
    components: {
        IonPage,
        IonContent,
        IonList,
        IonItem,
        IonLabel,
        IonButton,
        headerComponent,
        IonThumbnail,
        IonImg
    }

}
</script>
