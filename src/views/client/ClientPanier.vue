<template>
<ion-page>
    <header-component pageTitle="Panier" pageDefaultBackLink="/client/categories"></header-component>

    <ion-content>
        <ion-list>
            <ion-item v-for="produit in produits" v-bind:key="produit.id">
                
                <ion-thumbnail slot="start">
                    <ion-img :src="produit.image" :alt="produit.libelle"></ion-img>
                </ion-thumbnail>
                <ion-label>{{ produit.libelle}}</ion-label>
                <ion-label>{{ produit.prix}} €</ion-label>
                <ion-label>{{ produit.quantite}}</ion-label>
                <ion-button @click="deletePanier(produit.id)" >X</ion-button>

            </ion-item>
        Total : {{ this.prixTotal }} €
        </ion-list> 
    </ion-content>
    <ion-button @click="showCommandeForm()" >Finaliser la commande</ion-button>

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
    name: 'ClientPanier',
    created(){
        this.getPanier();
    },
    data(){
        return{
            produits:[{
                id:1,
                libelle:'',
                image:'',
                quantite:1,
                prix:1
            }],
            prixTotal: 0,
        }
    },
    methods:{
        getPanier(){
            this.produits = []
            this.prixTotal = 0
            const panier = this.$store.getters.getPanier()

            panier.forEach(element => {
                let produit = this.$store.getters.getProduit(element.id)

                var elementPanier = {
                    id: produit.id,
                    libelle: produit.libelle,
                    image: produit.image,
                    quantite: element.quantite,
                    prix: element.prix
                }
                this.prixTotal += element.prix
                this.produits.push(elementPanier)
            });

        },
        deletePanier(panier_id){
            this.$store.dispatch("deletePanier",panier_id);
            setTimeout(() => {  
                this.getPanier()
            }, 500);

        },
        showCommandeForm(){
            this.$router.replace('/client/commandeForm')
        }
    }, 
    computed:{
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
