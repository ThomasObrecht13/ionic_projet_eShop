<template>
<ion-page>
    <header-component pageTitle="Commande" :pageDefaultBackLink="`/client/panier`"></header-component>

    <ion-content>
        <form @submit.prevent="submitForm">
                <ion-list>
                    <ion-item>
                        <ion-label position="floating">
                            <h2>Nom</h2>
                        </ion-label>
                        <ion-input type="text" v-model="commande.nom" required/>
                    </ion-item>
                   
                    <ion-item>
                        <ion-label position="floating">
                            <h2>prenom</h2>
                        </ion-label>
                        <ion-input type="text" v-model="commande.prenom" required/>
                    </ion-item>
                   
                    <ion-item>
                        <ion-label position="floating">
                            <h2>email</h2>
                        </ion-label>
                        <ion-input type="text" v-model="commande.email" required/>
                    </ion-item>
                   
                    <ion-item>
                        <ion-label position="floating">
                            <h2>telephone</h2>
                        </ion-label>
                        <ion-input type="text" v-model="commande.telephone" required/>
                    </ion-item>
                </ion-list>
                <ion-button type="submit" expand="full" class="ion-padding">Valider</ion-button>
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

import headerComponent from "../../components/Header.vue";

export default ({
    name:"ClientCommandeForm",

    data(){
        return{
            commande: {
                prenom : '',
                nom : '',
                email : '',
                telephone : ''
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
            this.$store.dispatch("addCommande",this.commande)
            this.$router.replace("/client/successCommande")
        }
    }

})

</script>


