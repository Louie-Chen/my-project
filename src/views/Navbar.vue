<template>
<div>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <router-link class="navbar-brand" to="/">
            <div class="h1">
                <img src="https://upload.cc/i1/2020/08/25/kuMERe.png" alt="">
            </div>
        </router-link>
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
    </nav>
</div>
</template>

<script>
export default {
    name: 'Navbar',

    data() {
        return {}
    },

}
</script>

<style>

</style>
