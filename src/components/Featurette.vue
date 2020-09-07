<template>
<div>
    <div class="container marketing" style="margin-top:-50px;">
        <div class="row featurette">
            <router-link to="/myproduct" class="col-md-12 mb-3 bg-1">

            </router-link>

        </div>
        <div class="row featurette">
            <router-link to="/myproduct" class="col-md-12 mb-3 bg-2">

            </router-link>

        </div>
        <hr class="featurette-divider">
        <div class="row featurette" style="width:100%;">
            <div class="col-md-7 h-100 mb-3">
                <vue-aos animation-class="fadeIn animated">
                    <div data-aos="fade-right">
                        <h2 class="featurette-heading" style="margin-top:0.3rem;">ST-Stroe<span class="text-muted"></span></h2>
                        <p class="lead" style="color:#6E6EFF;">創立於2002年，主要銷售各類電競商品。當時創立因為深愛遊戲，希望把好東西像大家推廣。</p>
                    </div>
                </vue-aos>
            </div>
            <div class="col-md-5 h-100">
                <vue-aos animation-class="fadeIn animated">
                    <div data-aos="fade-left">
                        <div class="bg-3"></div>
                    </div>
                </vue-aos>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import VueAos from 'vue-aos'

export default {
    name: 'App',
    data() {
        return {}
    },
    components: {
        VueAos
    }
}
</script>

<style>
.bg-1 {
    background-image: url(https://shoplineimg.com/58463ef36170691735790100/5ee4d2588de57500217860df/1200x.webp?source_format=jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding-bottom: 32%;
}

.bg-2 {
    background-image: url(https://shoplineimg.com/58463ef36170691735790100/5f3b628a7771af0027d809aa/1200x.webp?source_format=jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding-bottom: 54%;
}

.bg-3 {
    background-image: url(https://upload.cc/i1/2020/08/22/8dAMDS.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding-bottom: 60%;
}
</style>
