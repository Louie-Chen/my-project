<template>
<div>
    <div class="container marketing pb-5">
        <hr class="featurette-divider">
        <div style="margin-top:-5%; margin-bottom:5rem;">
            <h2 class="text-danger">熱門商品</h2>
        </div>
        <Swiper class="mb-5" />
    </div><!-- /.container marketing -->

</div>
</template>

<script>
import Swiper from '../components/Swiper'
export default {
    components: {
        Swiper,
    },
    data() {
        return {}
    }

}
</script>

<style>
.page-item.active .page-link {
    background-color: #7878FF;
    border-color: #7878FF;
}

.card {
    background-color: #D9D9D9;
}

.page-link {
    border: 0px;
    background-color: #D9D9D9;
    border-color: #7878FF;
    color: black;
}

.shadow-lg {
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.5) !important;
}
</style>
