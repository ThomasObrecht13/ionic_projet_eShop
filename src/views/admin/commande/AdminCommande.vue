<template>
<ion-page>
    <header-component pageTitle="Commande" :pageDefaultBackLink="`/admin/commandes`"></header-component>

    <ion-content>
        <ion-list>
        <ion-label> {{ commande.id }} {{ commande.date }}</ion-label><br>
        <ion-label> {{ commande.nom }} {{ commande.prenom }}  {{ commande.montant }} €</ion-label><br>
        <ion-label> {{ commande.telephone }} </ion-label><br>
        <ion-label> {{ commande.email }} </ion-label><br>
        </ion-list>
        <ion-list>
            <ion-item v-for="produit in produits" v-bind:key="produit.id">
                <ion-thumbnail>
                    <ion-img  :src="produit.image" :alt="produit.libelle"></ion-img>
                </ion-thumbnail>

                <ion-label>{{ produit.libelle}}</ion-label>
                <br>
                <ion-label>{{ produit.prixUnitaire }}</ion-label>

                <ion-label>{{ produit.prix }}</ion-label>
                <ion-label>{{ produit.quantite }}</ion-label>

            </ion-item>
        </ion-list>


        
    </ion-content>
</ion-page>
</template>

<script>
import {
    IonPage,
    IonContent,
    IonLabel,
    IonImg,
    IonThumbnail,
    IonList,
    IonItem
} from "@ionic/vue";


import headerComponent from "../../../components/Header.vue";

export default {
    name: 'AdminCommande',
    created(){
        this.getProduitsCommande(this.commande_id)
    },
    data(){
        return{
            commande_id: 1,
            produits:[{
                id:1,
                libelle:'',
                image:'',
                quantite:1,
                prix:1,
                prixUnitaire:1
            }],
        }
    },
    methods:{
        getProduitsCommande(commande_id){
            const produitsCommande = this.$store.getters.getProduitsCommande(commande_id)

            produitsCommande.forEach(element => {
                let produit = this.$store.getters.getProduit(element.produit_id)

                var elementPanier = {
                    id: produit.id,
                    libelle: produit.libelle,
                    image: produit.image,
                    quantite: element.quantite,
                    prix: produit.prix * element.quantite ,
                    prixUnitaire: produit.prix
                }
                this.produits.push(elementPanier)
            });
            console.log(this.produits)
        }
    }, 
    watch:{
        '$route.params.id': {
            handler : function(id){
                this.commande_id = parseInt(id)
            },
            immediate: true
        }
    },
    computed:{
        commande(){
            return this.$store.getters.getCommande(this.commande_id);
        }
    },  
    components: {
        IonPage,
        IonContent,
        IonLabel,
        IonList,
        IonItem,
        headerComponent,
        IonImg,
        IonThumbnail
    }

}
</script>
