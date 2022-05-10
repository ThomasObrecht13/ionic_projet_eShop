<template>
<ion-page>
    <header-component pageTitle="Produit" :pageDefaultBackLink="`/client/categories/produits/`+produit.categorie_id"></header-component>

    <ion-content>

        <ion-thumbnail>
            <ion-img  :src="produit.image" :alt="produit.libelle"></ion-img>
        </ion-thumbnail>

        <ion-label>{{ produit.libelle}}</ion-label>
        <br>
        <ion-label>{{ produit.description }}</ion-label>
        <br>
        <ion-label>{{ produit.prix }}</ion-label>
        <br>
        <ion-button @click="addProduitPanier()" >Add</ion-button>
        <br>
         Panier : {{ this.nbProduit+' produits ('+this.prixPanier+')' }}

    </ion-content>

</ion-page>
</template>

<script>
import {
    IonPage,
    IonContent,
    IonLabel,
    IonButton,
    IonImg,
    IonThumbnail, 
} from "@ionic/vue";


import headerComponent from "../../components/Header.vue";

export default {
    name: 'ClientProduit',
    created(){
        this.getPanier()
    },
    data(){
        return{
            produit_id: 1,
            panier: [],
            prixPanier : 0,
            nbProduit : 0

        }
    },
    methods:{
        addProduitPanier(){
            this.$store.dispatch("addProduitPanier",this.produit_id)
            this.getPanier()
        },
        getPanier(){
            this.prixPanier = 0
            this.nbProduit = 0
            this.panier = this.$store.getters.getPanier();
            this.panier.forEach(produit => {
                this.nbProduit += produit.quantite
                this.prixPanier += produit.prix
            });
        },

    }, 
    watch:{
        '$route.params.id': {
            handler : function(id){
                this.produit_id = parseInt(id)
            },
            deep:true,
            immediate: true
        }
    },
    computed:{
        produit(){
            return this.$store.getters.getProduit(this.produit_id);
        },
    },  
    components: {
        IonPage,
        IonContent,
        IonLabel,
        IonButton,
        headerComponent,
        IonImg,
        IonThumbnail,
        
    }

}
</script>
