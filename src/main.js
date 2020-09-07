import Vue from 'vue'
import './plugins/fontawesome'
import './plugins/fontawesome'
import axios from 'axios'
import $ from 'jquery'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap';
import VeeValidate from 'vee-validate';
import zhTW from 'vee-validate/dist/locale/zh_TW';
import VueI18n from 'vue-i18n';
import AOS from 'aos';
import BackTop from './views/backTop.vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faGrinBeamSweat,faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Swiper, { Navigation, Pagination } from 'swiper';


import App from './App.vue'
import router from './router'
import './bus';
import currencyFilter from './filters/currency';
import dateFilter from './filters/date';
import 'aos/dist/aos.css';
import 'swiper/swiper-bundle.css';


library.add(
  faUser,
  faShoppingCart,
  faGrinBeamSweat,
  faTrashAlt,
  )
  
Swiper.use([Navigation, Pagination]);

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.prototype.$ = $;
Vue.use(VueAxios, axios);
Vue.use(BackTop);
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)


Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'zhTW'
})
Vue.use(VeeValidate, {
  events: 'input|blur', //這是為了讓使用者離開該欄位時觸發驗證
  i18n,
  dictionary: {
    zhTW
  }
})


Vue.component('Loading',Loading);
Vue.filter('currency',currencyFilter);
Vue.filter('date',dateFilter);




axios.defaults.withCredentials = true;




 

new Vue({
  created () {
    AOS.init()
  },
  i18n,
  el:'#app',
  router,
  render: h => h(App)
}).$mount('#app')



router.beforeEach((to, from, next) => {
  // ...
  if(to.meta.requiresAuth){
    const api =`${process.env.VUE_APP_APIPATH}/api/user/check`
    axios.post(api).then((response)=> {
    console.log(response.data);
    if(response.data.success){
      next();
    }else{
      next({
        path:'/',
      })
     }
    });
  }else{
    next();
  }
})