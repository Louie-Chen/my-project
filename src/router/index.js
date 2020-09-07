import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Products from '../components/Products.vue'
import Orders from '../components/Orders.vue'
import Coupon from '../components/Coupon.vue'
// import CustomerOrders from '../components/CustomerOrders.vue'
// import CustomerCheckout from '../components/CustomerCheckout.vue'
import MyProducts from '../views/MyProducts.vue'
import Check from '../components/Check.vue'
import UserLogin from '../components/UserLogin.vue'
import CheckOut from '../components/CheckOut.vue'
import UserOrders from '../components/UserOrders.vue'
import UserCheckOrders from '../components/UserCheckOrders.vue'


Vue.use(VueRouter)

  const routes = [
    {
      path:'*',
      redirect:'/',
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: Dashboard,
      children:[
        {
          path: 'products',
          name: 'Products',
          component: Products,
          meta: { requiresAuth: true },
        },
        {
          path: 'orders',
          name: 'Order',
          component: Orders,
          meta: { requiresAuth: true },
        },
        {
          path: 'coupon',
          name: 'coupon',
          component: Coupon,
          meta: { requiresAuth: true },
        },
      ],
    },
    // {
    //   path: '/',
    //   name: 'Dashboard2',
    //   component: Dashboard,
    //   children:[
    //     {
    //       name:'CustomerOrders', 
    //       path:'customerOrders', 
    //       component:CustomerOrders,
    //     },
    //     {
    //       name:'CustomerCheckout', 
    //       path:'customerCheckout/:orderId', 
    //       component:CustomerCheckout,
    //     }
    //   ]
    // },
    {
      path: '/',
      name: '首頁',
      component: ()=> import('../views/Carousel.vue'),
    },
    {
      path: '/myproduct',
      name: '商城',
      component:  MyProducts,
    },
    {
      path: '/check',
      name: '結帳去',
      component:  Check,
    },
    {
      path: '/userlogin',
      name: '會員登入',
      component: UserLogin ,
    },
    {
      path: '/checkout',
      name: '結帳表單',
      component: CheckOut ,
    },
    {
      path: '/userorders/:orderId',
      name: '訂單確認',
      component: UserOrders ,
    },
    {
      path: '/usercheckorder',
      name: '查看訂單',
      component: UserCheckOrders ,
    },
]

const router = new VueRouter({
  routes
})

export default router


