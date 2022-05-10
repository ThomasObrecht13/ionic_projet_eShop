<template>
<ion-page>
    <header-component pageTitle="Produit" :pageDefaultBackLink="`/admin/categories/produits/`+produit.categorie_id"></header-component>

    <ion-content>
            <ion-button @click="showEditProduitForm(produit.id)">Modifier</ion-button>

        <ion-thumbnail>
            <ion-img  :src="produit.image" :alt="produit.libelle"></ion-img>
        </ion-thumbnail>

        <ion-label>{{ produit.libelle}}</ion-label>
        <br>
        <ion-label>{{ produit.description }}</ion-label>
        <br>
        <ion-label>{{ produit.prix }}</ion-label>

        
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
    IonThumbnail
} from "@ionic/vue";


import headerComponent from "../../../components/Header.vue";

export default {
    name: 'AdminProduit',
    data(){
        return{
            produit_id: 1,
        }
    },
    methods:{
        showEditProduitForm(produit_id){
            this.$router.replace('/admin/editProduit/'+produit_id)      
        }
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
        }
    },  
    components: {
        IonPage,
        IonContent,
        IonLabel,
        IonButton,
        headerComponent,
        IonImg,
        IonThumbnail
    }

}
</script>
