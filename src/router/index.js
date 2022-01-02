import {createRouter, createWebHistory} from 'vue-router'

import Home from "@/views/homePage/Home";
import AddProduct from "@/views/addPage/AddProduct";
import ShowProduct from "@/views/showPage/ShowProduct";
import ModifyProduct from "../views/modifyPage/ModifyProduct";


const routes = [
    {
        path:"/",
        name:"Accueil",
        component: Home
    },
    {
        path:"/addProduct",
        name:"Ajout Produit",
        component: AddProduct
    },
    {
        path:"/showProduct",
        name:"Affichage Produit",
        component: ShowProduct
    },
    {
        path:"/modifyProduct",
        name:"Modification Produit",
        component: ModifyProduct
    }
]

const router = new createRouter({
    routes, // short for routes: routes
    history: createWebHistory(),
    linkActiveClass: "active"
});

export default router;
