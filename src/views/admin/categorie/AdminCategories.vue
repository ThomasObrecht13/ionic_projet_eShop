<template>
<ion-page>
    <header-component pageTitle="Categories" pageDefaultBackLink="/admin"></header-component>

    <ion-content>
        <ion-button @click="showAddCategorieForm()">Ajouter une categorie</ion-button>

        <ion-list>
            <ion-item v-for="categorie in categories" v-bind:key="categorie.id">
                <ion-label>{{ categorie.libelle }}</ion-label>
                <ion-label>{{ categorie.id }}</ion-label>

                <ion-button @click="showProduit(categorie.id)">Liste produits</ion-button>
                <ion-button @click="editCategorie(categorie.id)">Edit</ion-button>
                <ion-button @click="deleteCategorie(categorie.id)">Delete</ion-button>

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
} from "@ionic/vue";


import headerComponent from "../../../components/Header.vue";

export default {
    name: 'AdminCategorie',
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
            this.$router.replace('/admin/categories/produits/'+categorie_id)      
        },
        showAddCategorieForm(){
            this.$router.replace('/admin/addcategories')      
        },
        deleteCategorie(categorie_id){
            this.$store.dispatch("deleteCategorie", categorie_id);
            setTimeout(() => {  
                this.getCategories()
            }, 500);
        },
        editCategorie(categorie_id){
            this.$router.replace('/admin/editCategorie/'+categorie_id);
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
