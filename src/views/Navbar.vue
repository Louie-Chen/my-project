<template>
<div>
    <!---<nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <a class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Company name</a>
            <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search">
            <ul class="navbar-nav px-3">
                <li class="nav-item text-nowrap">
                <a class="nav-link" href="#" @click.prevent="signout">Sign out</a>
                </li>
            </ul>
        </nav>---->

    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <router-link class="navbar-brand" to="/">
            <div class="h1">
                <img src="https://upload.cc/i1/2020/08/25/kuMERe.png" alt="">
            </div>
        </router-link>
        <div class="toolbar ml-auto">
            <ul style="list-style-type: none; margin-bottom:0rem;">
                <li class="pr-3" style="display: inline-block">
                    <router-link to="/userlogin" style="font-size: 27px; color: grey; z-index: 1000;">
                        <font-awesome-icon :icon="['fas', 'user']" style="font-size:22px;"></font-awesome-icon>
                    </router-link>
                </li>
                <li class="pr-3" style="display: inline-block">
                    <router-link to="/check">
                        <font-awesome-icon icon="shopping-cart" style="font-size: 25px;color: grey; z-index: 1000;  "></font-awesome-icon>
                        <div class="badge badge-secondary badge-pill cart" style="position: relative; top: -15px; right: 10px; background-color: blueviolet;">
                            {{length}}
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">首頁</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/myproduct" @click.native="flushCom">商城</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/userlogin">
                        會員登入
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/check">
                        結帳去
                        <div class="badge badge-secondary badge-pill" style="position: relative;top:-2px; right: -1px; background-color: blueviolet;" v-if="cart.carts.length !=0">
                            {{length}}
                        </div>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/usercheckorder">
                        查看訂單
                    </router-link>
                </li>

            </ul>
        </div>
    </nav>
</div>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            length: [],
            isLoading: false,
            cart: {
                carts: [],
            },
        }
    },
    methods: {
        getCart() {
            const vm = this;
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPAH}/cart`;
            vm.isLoading = true;
            this.$http.get(url).then((response) => {
                vm.cart = response.data.data;
                vm.length = response.data.data.carts.length;
                //console.log(vm.length);
                vm.isLoading = false;
            });
        },
        flushCom: function () {
            this.$router.go(0);
        }

    },
    created() {
        this.getCart();
    },
    // methods: {
    //     signout(){
    //         const vm =this;
    //         const url = `${process.env.APIPATH}/logout`;
    //         this.$http.post(url).then((response)=>{
    //             if(response.data.success){
    //                 vm.$router.push('/signin');
    //             }
    //         })
    //     }
    // },
}
</script>

<style>
@media (min-width: 768px) {
    .toolbar {
        display: none;
    }
}
</style>
