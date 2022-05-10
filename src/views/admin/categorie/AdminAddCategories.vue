<template>
<ion-page>
    <header-component pageTitle="Add categorie" pageDefaultBackLink="/admin/categories"></header-component>

    <ion-content>
        <form @submit.prevent="submitForm">
                <ion-list>
                    <ion-item>
                        <ion-label position="floating">
                            <h2>libelle categorie</h2>
                        </ion-label>
                        <ion-input type="text" v-model="categorie.libelle" required/>
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
    name:"AdminEditCategorie",

    data(){
        return{
            categorie: {
                libelle:'',
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
            this.$store.dispatch("addCategorie",this.categorie)
            setTimeout(() => {  
               this.$router.replace("/admin/categories")
            }, 500);

        }
    },

})

</script>


