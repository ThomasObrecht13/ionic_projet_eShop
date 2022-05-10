import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/authentification/Login.vue')
  },
  
  /*---------------
    Admin route
  ---------------*/
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/admin/AdminHome.vue')
  },

  //PRODUITS
  {
    path: '/admin/produits',
    name: 'AdminProduits',
    component: () => import('../views/admin/produit/AdminProduits.vue')
  },
  {
    path: '/admin/produit/:id',
    name: 'AdminProduit',
    component: () => import('../views/admin/produit/AdminProduit.vue')
  },
  {
    path: '/admin/addProduit/:id',
    name: 'AdminAddProduits',
    component: () => import('../views/admin/produit/AdminAddProduits.vue')
  },
  {
    path: '/admin/editProduit/:id',
    name: 'AdminEditProduits',
    component: () => import('../views/admin/produit/AdminEditProduits.vue')
  },

  //CATEGORIES
  {
    path: '/admin/categories',
    name: 'AdminCategories',
    component: () => import('../views/admin/categorie/AdminCategories.vue')
  },
  {
    path: '/admin/addcategories',
    name: 'AdminAddCategories',
    component: () => import('../views/admin/categorie/AdminAddCategories.vue')
  },
  {
    path: '/admin/editCategorie/:id',
    name: 'AdminEditCategories',
    component: () => import('../views/admin/categorie/AdminEditCategories.vue')
  },
  {
    path: '/admin/categories/produits/:id',
    name: 'CategoriesProduits',
    component: () => import('../views/admin/produit/AdminProduits.vue')
  },
  //COMMANDE
  {
    path: '/admin/commandes',
    name: 'AdminCommandes',
    component: () => import('../views/admin/commande/AdminCommandes.vue')
  },
  {
    path: '/admin/commande/:id',
    name: 'AdminCommande',
    component: () => import('../views/admin/commande/AdminCommande.vue')
  },

  /*---------------
    Client route
  ---------------*/
  //CATEGORIES
  {
    path: '/client',
    name: 'Client',
    redirect: '/client/categories'
  },
  {
    path: '/client/categories',
    name: 'ClientCategories',
    component: () => import('../views/client/ClientCategories.vue')
  },
  {
    path: '/client/categories/produits/:id',
    name: 'ClientCategoriesProduits',
    component: () => import('../views/client/ClientProduits.vue')
  },
  //PRODUIT
  {
    path: '/client/produit/:id',
    name: 'ClientProduit',
    component: () => import('../views/client/ClientProduit.vue')
  },
  //PANIER

  {
    path: '/client/panier',
    name: 'ClientPanier',
    component: () => import('../views/client/ClientPanier.vue')
  },
  //COMMANDE
  {
    path: '/client/commandeForm',
    name: 'ClientCommandeForm',
    component: () => import('../views/client/ClientCommandeForm.vue')
  },
  {
    path: '/client/successCommande',
    name: 'ClientSuccessCommande',
    component: () => import('../views/client/ClientSuccessCommande.vue')
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
