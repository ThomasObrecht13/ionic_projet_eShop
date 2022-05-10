<template>
<ion-page>
    <header-component pageTitle="Categories"></header-component>

    <ion-content>

        <ion-list>
            <ion-item v-for="categorie in categories" v-bind:key="categorie.id">
                <ion-label>{{ categorie.libelle }}</ion-label>
                <ion-label>{{ categorie.id }}</ion-label>

                <ion-button @click="showProduit(categorie.id)">Liste produits</ion-button>

            </ion-item>


        </ion-list>
                    <ion-button @click="showPanier()" >Panier</ion-button>

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
} from "@ionic/vue";


import headerComponent from "../../components/Header.vue";

export default {
    name: 'ClientCategories',
    created(){
        this.getCategories()
        this.getProduits()
    },
    data() {
        return {
        }
    },
    methods:{
        getProduits(){
            this.$store.dispatch("getProduits");
        },
        getCategories(){
            this.$store.dispatch("getCategories");
        },
   
        showProduit(categorie_id){
            this.$router.replace('/client/categories/produits/'+categorie_id)      
        },
        showPanier(){
            this.$router.replace('/client/panier');
        }
    },
    computed:{
        categories(){
            return this.$store.getters.getCategories()
        }
    },  
    components: {
        IonPage,
        IonContent,
        IonList,
        IonItem,
        IonLabel,
        headerComponent,

    }

}
</script>
