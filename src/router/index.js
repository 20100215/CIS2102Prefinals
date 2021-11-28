import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ItemInfo from '../views/ItemInfo.vue'
import Cart from '../views/Cart.vue'
import Success from '../views/PurchaseSuccess.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: Cart,
    props: true
  },
  {
    path: '/ItemInfo/:id',
    name: 'ItemInfo',
    component: ItemInfo,
    props: true
  },
  {
    path: '/Success',
    name: 'Success',
    component: Success,
    props: true
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
