<template>
<div>
    <router-link to="/check">
        <div class="cartframe">
            <font-awesome-icon icon="shopping-cart" style="font-size: 25px;color: grey; z-index: 1000; position: absolute; top: 26%; left: 18%;  "></font-awesome-icon>
            <div class="cartcount" v-if="cartInfo.data.total!==0">
                <div class="cartcounter">{{ cartInfo.data.carts.length }}</div>
            </div>
        </div>
    </router-link>
    <!-- <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
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
                            <span class="badge badge-secondary badge-pill cart" style="position: relative; top: -15px; right: 10px; background-color: blueviolet;">
                                {{ cartInfo.data.carts.length }}
                            </span>
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
                        <router-link class="nav-link" to="/myproduct">商城</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/userlogin">
                            會員登入
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/check">
                            結帳去
                            <span class="badge badge-secondary badge-pill" style="position: relative;top:-2px; right: -1px; background-color: blueviolet;">
                            </span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/usercheckorder">
                            查看訂單
                        </router-link>
                    </li>

                </ul>
            </div>
        </nav>-->
</div>
</template>

<script>
export default {
    name: 'Navbar',
    props: ['cartInfo', 'isLoading'],
    data() {
        return {}
    },
    methods: {
        refreshCart() {
            this.$emit('refreshCart')
        },
    },
}
</script>

<style>
.cartcount {
    position: absolute;
    right: -6px;
    top: -8px;
    height: 23px;
    width: 23px;
    z-index: 10000;
    border: 1px solid black;
    background-color: black;
    border-radius: 25px;
}

.cartcounter {
    color: yellow;
    position: absolute;
    left: 50%;
    transform: translateX(-50%) translateY(-10%);
}

.cartframe {
    border: 1px solid black;
    border-radius: 153px;
    background-color: white;
    height: 50px;
    width: 50px;
    position: fixed;
    right: 10px;
    bottom: 80px;
    box-shadow: 0px 0px 11px cover;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1);
    z-index: 10;
}

.carticon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 25px;
    color: black;
}

@media (min-width: 768px) {
    .toolbar {
        display: none;
    }
}
</style>
