<template>
<ion-page>
    <header-component pageTitle="Add produit" :pageDefaultBackLink="`/admin/categories/produits/`+produit.categorie_id"></header-component>

    <ion-content>
        <form @submit.prevent="submitForm">
                <ion-list>
                    <ion-item>
                        <ion-label position="floating">
                            <h2>libelle produit</h2>
                        </ion-label>
                        <ion-input type="text" v-model="produit.libelle" required/>
                    </ion-item>
                   
                    <ion-item>
                        <ion-label position="floating">
                            <h2>description produit</h2>
                        </ion-label>
                        <ion-input type="text" v-model="produit.description" required/>
                    </ion-item>
                   
                    <ion-item>
                        <ion-label position="floating">
                            <h2>image produit</h2>
                        </ion-label>
                        <ion-input type="text" v-model="produit.image" required/>
                    </ion-item>
                   
                    <ion-item>
                        <ion-label position="floating">
                            <h2>prix produit</h2>
                        </ion-label>
                        <ion-input type="text" v-model="produit.prix" required/>
                    </ion-item>
                </ion-list>
                <ion-button type="submit" expand="full" class="ion-padding">Add</ion-button>
            </form>
    </ion-content>

</ion-page>

</template>


<script>
import{
    IonPage,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonButton
    
} from "@ionic/vue"

import headerComponent from "../../../components/Header.vue";

export default ({
    name:"AdminAddProduit",

    data(){
        return{
            produit: {
                libelle : '',
                description : '',
                categorie_id : 1,
                image : '',
                prix : ''
            }
        }
    },
    components : {
        IonPage,
        IonContent,
        IonList,
        IonItem,
        IonLabel,
        IonInput,
        IonButton,
        headerComponent
        },
    methods:{
        submitForm(){
            this.$store.dispatch("addProduit",this.produit)
            setTimeout(() => {  
               this.$router.replace("/admin/categories/produits/"+this.produit.categorie_id)
            }, 500);

        }
    },
        watch:{
        '$route.params.id': {
            handler : function(id){
                this.produit.categorie_id = parseInt(id)
            },
            deep:true,
            immediate: true
        }
    },

})

</script>


