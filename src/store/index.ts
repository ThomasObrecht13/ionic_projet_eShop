import {createStore} from 'vuex';
import axios from 'axios';
import { renderSlot } from 'vue';

const baseURL = 'http://localhost:8080/';

const store = createStore({
    state:{
        produits : [
            {id:1, libelle:"produit 1", description:"je suis la description du produit 1",image:"https://via.placeholder.com/150",prix:3.1,categorie_id:1},
        ],
        categories: [
            {id:1, libelle:"categories 1", user_id:1},
        ],
        role : 'client',
        panier: [
            {id:1, quantite:1, prix:1},
        ],
        commandes: [
            {id:1, nom:'nom', prenom:'prenom', telephone:'00000000', email:'test@test.test', date:'283', quantite:1, montant:1},
        ],
        produits_commandes: [
            {produit_id:1, commande_id:1, prix:0, quantite:0},
        ]
    },
    getters:{
        //PRODUIT
        getProduits: (state) => () => {
            return state.produits
        },
        getProduitsbyCategorie: (state) => (categorie_id:number) => {
            return state.produits.filter(p => p.categorie_id === categorie_id)
        },
        getProduit: (state) => (produit_id:number) => {
            const indexMaj = state.produits.findIndex(p => p.id === produit_id)
            return state.produits[indexMaj]
        },

        //CATEGORIE
        getCategories: (state) => () => {
            return state.categories
        },
        getCategorie: (state) => (categorie_id:number) => {
            const indexMaj = state.categories.findIndex(c => c.id === categorie_id)
            return state.categories[indexMaj];
        },
        //PANIER
        getPanier: (state) => () => {
            return state.panier
        },

        //COMMANDE
        getCommandes: (state) => () => {
            return state.commandes
        },
        getCommande: (state) => (commande_id:number) => {
            const indexMaj = state.commandes.findIndex(c => c.id === commande_id)
            return state.commandes[indexMaj];
        },
        getProduitsCommandes: (state) => () => {
            return state.produits_commandes;
        },
        getProduitsCommande: (state) => (commande_id:number) => {
            return state.produits_commandes.filter(pc => pc.commande_id === commande_id)
            
        },
        
        getRole: (state) => () => {
            return state.role;
        }
    },
    mutations: {

        //USER
        SAVE_ROLE(state,role){
            state.role = role
        },
        LOGIN_USER(state, userData) {
            axios.post(baseURL + 'api/user/login', userData).then((response) => {
                const content = response.data;
                if (content.role == 'admin') {
                    state.role = 'admin'
                } else {
                    state.role = 'client'
                }
            })
        },
        LOGOUT_USER(state) {
            let username = ''
            if (state.role == 'admin') {
                username = 'iutlpro'
            } else {
                username = 'client'
            }
            axios.post(baseURL + 'api/user/logout', username);
        },
        //PRODUIT
        SAVE_PRODUIT(state,produits){
            state.produits = produits
        },
        ADD_PRODUIT(state,produitData){
            axios.post(baseURL +'api/produits', produitData).then((response) => {
                console.log(response.data);
            });
        },
        EDIT_PRODUIT(state,produitData){
            axios.put(baseURL +'api/produits/'+produitData.id, produitData).then((response) => {
                console.log(response.data);
            });
        },
        DELETE_PRODUIT(state,produit_id){
            if(state.produits_commandes.findIndex(p => p.produit_id === produit_id) != -1){
                alert('Ce produit est lié à des commandes, vous ne pouvez pas le supprimer')
            }else{  
                axios.delete(baseURL +'api/produits/'+produit_id).then((response) => {
                    console.log(response.data);
                });
            }
        },

        //CATEGORIES
        SAVE_CATEGORIE(state,categories){
            state.categories = categories
        },
        ADD_CATEGORIE(state,categorieData){
            axios.post(baseURL +'api/categories', categorieData).then((response) => {
                console.log(response.data);
            });
        },
        EDIT_CATEGORIE(state,categorieData){
            axios.put(baseURL +'api/categories/'+categorieData.id, categorieData).then((response) => {
                console.log(response.data);
            });
        },
        DELETE_CATEGORIE(state,categorie_id){
            if(state.produits.findIndex(p => p.categorie_id === categorie_id) != -1){
                alert('Cette catégorie contient des produits')
            }else{            
                axios.delete(baseURL +'api/categories/'+categorie_id).then((response) => {
                    console.log(response.data);
                });
            }
        },
        //PANIER
        ADD_PANIER(state, produit_id){ 
            
            const indexPanier = state.panier.findIndex(p => p.id === produit_id)
            const inderProduit = state.produits.findIndex(p => p.id === produit_id)
            const produit_commande = {
                id: produit_id,
                quantite:1,
                prix: state.produits[inderProduit].prix
            }
            if(indexPanier == -1){
                state.panier.push(produit_commande)
            }else{
                produit_commande.quantite = state.panier[indexPanier].quantite + 1
                produit_commande.prix = produit_commande.quantite * state.produits[inderProduit].prix
                state.panier[indexPanier] = produit_commande
            }

            console.log(state.panier)
        },
        CLEAN_PANIER(state){ 
            state.panier = []
        },
        DELETE_PANIER(state,panier_id){
            console.log(state.panier)
            const indexMaj = state.panier.findIndex(p => p.id === panier_id)
            state.panier.splice(indexMaj,1)
            console.log(state.panier)
        },

        //COMMANDE
        SAVE_COMMANDE(state, commandes){
            state.commandes = commandes
        },
        SAVE_PRODUIT_COMMANDE(state, produits_commandes){
            state.produits_commandes = produits_commandes
        },
        ADD_COMMANDE(state, commandeData){
            let prix = 0
            state.panier.forEach(element => {
                prix += element.prix
            })

            const commande = {
                date : new Date(),
                montant : prix,
                nom : commandeData.nom,
                prenom : commandeData.prenom,
                email : commandeData.email,
                telephone : commandeData.telephone,
            }

            axios.post(baseURL +'api/commandes',commande).then((response) => {
                console.log(response.data)
                return response.data
            });         
        },
        
    },



    actions: {
        //USER
        loginUser(state, userData){
            state.commit("LOGIN_USER",userData)
        },
        logout(state){
            state.commit("LOGOUT_USER")
        },

        async getProduits(state){
            const response =  await axios.get(baseURL +"api/produits");
            state.commit('SAVE_PRODUIT', response.data);
        },
        addProduit(state, produitData) {
            state.commit("ADD_PRODUIT",produitData)
        },
        editProduit(state, produitData) {
            state.commit("EDIT_PRODUIT",produitData)
        },
        deleteProduit(state, produit_id) {
            state.commit("DELETE_PRODUIT",produit_id)
        },
        //CATEGORIES
        async getCategories(state){
            const response =  await axios.get(baseURL +"api/categories");
            state.commit('SAVE_CATEGORIE', response.data);
        },
        async getCategorie(state,categorie_id){
            const response =  await axios.get(baseURL +"api/categories"+categorie_id);
            state.commit("GET_CATEGORIE", response.data)
        },
        addCategorie(state, categorieData) {
            state.commit("ADD_CATEGORIE",categorieData)
        },
        editCategorie(state, categorieData) {
            state.commit("EDIT_CATEGORIE",categorieData)
        },
        deleteCategorie(state, categorie_id) {
            state.commit("DELETE_CATEGORIE",categorie_id)
        },

        //PANIER
        addProduitPanier(state, produit_id){
            state.commit("ADD_PANIER",produit_id)
        },
        cleanPanier(state){
            state.commit("CLEAN_PANIER")
        },
        deletePanier(state,panier_id){
            state.commit("DELETE_PANIER")
        },

        //COMMANDE
        async getCommandes(state){
            const response =  await axios.get(baseURL +"api/commandes");
            state.commit("SAVE_COMMANDE", response.data)
        },
        async getProduitsCommandes(state){
            const response =  await axios.get(baseURL +"api/commande_produits");
            state.commit("SAVE_PRODUIT_COMMANDE", response.data)
        },
        
        addCommande(state, commandeData){
            state.commit("ADD_COMMANDE",commandeData)
        }
    }
});

export default store;