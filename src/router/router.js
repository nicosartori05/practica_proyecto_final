import {createRouter, createWebHashHistory} from "vue-router";

import Splash from '../views/Splash.vue'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'

const routes = [
    {path:"/", component: Splash},
    {path:"/home", component: Home},
    {path:"/register", component: Register},
    {path:"/login", component: Login},
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})


export default router;