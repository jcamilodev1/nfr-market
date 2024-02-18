import {createRouter, createWebHashHistory} from 'vue-router'
import Home from  '@/views/Home.vue'
import Login from  '@/views/auth/Login.vue'
import RegisterVue from '@/views/auth/Register.vue'
const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: RegisterVue },
]


const router = createRouter({

  history: createWebHashHistory(),
  routes, 
})

export default router