<template>
<ion-page>
    <ion-content>
        <form @submit.prevent="submitForm">
                <ion-list>
                    <ion-item>
                        <ion-label position="floating">
                            <h2>Username</h2>
                        </ion-label>
                        <ion-input type="text" v-model="user.username" required/>
                    </ion-item>
                    <ion-item>
                        <ion-label position="floating">
                            <h2>Password</h2>
                        </ion-label>
                        <ion-input type="password" v-model="user.password" required/>
                    </ion-item>
                </ion-list>
                <ion-button type="submit" expand="full" class="ion-padding">Connexion</ion-button>
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


export default ({
    name:"loginPage",
    created(){
        this.getProduits()
        this.getCategories()
        this.cleanPanier()
        this.getCommandes()
        this.getProduitsCommandes()
    },
    data(){
        return{
            user: {
                username:'',
                password:'',
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
        IonButton
        },
    methods:{
        getCategories(){
            this.$store.dispatch("getCategories");
        },
        cleanPanier(){
            this.$store.dispatch("cleanPanier");
        },
        getProduits(){
            this.$store.dispatch("getProduits");
        },
        getCommandes(){
            this.$store.dispatch("getCommandes");
        },
        getProduitsCommandes(){
            this.$store.dispatch("getProduitsCommandes");
        },
        submitForm(){
          this.$store.dispatch("loginUser",this.user)
          

            setTimeout(() => {  
                console.log("getter : "+this.$store.getters.getRole());
                if(this.$store.getters.getRole() == 'admin'){
                    this.$router.replace("/admin")
                }else{
                    this.$router.replace("/client")
                }
            }, 1000);

        }
    }
})

</script>


