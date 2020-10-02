import Vue from 'vue'
import Router from 'vue-router'
const User = () => import('@/modules/user/User.vue');
const Products = () => import('@/modules/products/Products.vue');
const Cart = () => import('@/modules/cart/Cart.vue');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    { path: '/', redirect: '/user' }
  ]
})
