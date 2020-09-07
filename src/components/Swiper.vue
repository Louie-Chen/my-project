<template>
<swiper class="swiper row" ref="swiper" :options="swiperOption">
    <swiper-slide>
        <div class="container-fluid mb-5">
            <div class="row d-flex justify-content-center">
                <div class="" v-for="item in filterData" :key="item.id">
                    <div class="card border-0 shadow-lg">
                        <div style="height: 150px; background-size: cover; background-position: center" :style="{backgroundImage:`url(${item.imageUrl})`}"></div>
                        <div class="card-body">
                            <h5 class="card-title">
                                <router-link to="/myproduct" class="h6 text-dark d-flex justify-content-center" @click.prevent="getProduct(item.id)">{{item.title}}</router-link>
                            </h5>
                            <p class="card-text">{{item.content}}</p>
                            <div class="d-flex justify-content-between align-items-baseline">
                                <del class="h6" v-if="item.price!== item.origin_price">NT{{item.origin_price | currency}}</del>
                                <div class="ml-auto">
                                    <div class="h5" v-if="item.price">NT{{item.price | currency}}</div>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer d-flex">
                            <router-link to="/myproduct">
                                <button type="button" class="btn btn-outline-secondary btn-sm">
                                    <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                                    查看更多
                                </button>
                            </router-link>
                            <button type="button" class="btn btn-outline-indigo btn-sm ml-auto" @click="addtoCart(item.id)">
                                <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                                加到購物車
                            </button>
                        </div>
                    </div>
                </div><!-- /.col-lg-4 -->
            </div><!-- /.row -->
        </div>
    </swiper-slide>
    <swiper-slide>
        <div class="container-fluid mb-5">
            <div class="row d-flex justify-content-center">
                <div class="" v-for="item in filterData2" :key="item.id">
                    <div class="card border-0 shadow-lg">
                        <div style="height: 150px; background-size: cover; background-position: center" :style="{backgroundImage:`url(${item.imageUrl})`}"></div>
                        <div class="card-body">
                            <h5 class="card-title">
                                <router-link to="/myproduct" class="h6 text-dark d-flex justify-content-center" @click.prevent="getProduct(item.id)">{{item.title}}</router-link>
                            </h5>
                            <p class="card-text">{{item.content}}</p>
                            <div class="d-flex justify-content-between align-items-baseline">
                                <del class="h6" v-if="item.price!== item.origin_price">NT{{item.origin_price | currency}}</del>
                                <div class="ml-auto">
                                    <div class="h5" v-if="item.price">NT{{item.price | currency}}</div>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer d-flex">
                            <router-link to="/myproduct">
                                <button type="button" class="btn btn-outline-secondary btn-sm">
                                    <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                                    查看更多
                                </button>
                            </router-link>
                            <button type="button" class="btn btn-outline-indigo btn-sm ml-auto" @click="addtoCart(item.id)">
                                <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                                加到購物車
                            </button>
                        </div>
                    </div>
                </div><!-- /.col-lg-4 -->
            </div><!-- /.row -->
        </div>
    </swiper-slide>
    <swiper-slide>
        <div class="container-fluid mb-5">
            <div class="row d-flex justify-content-center">
                <div class="" v-for="item in filterData3" :key="item.id">
                    <div class="card border-0 shadow-lg">
                        <div style="height: 150px; background-size: cover; background-position: center" :style="{backgroundImage:`url(${item.imageUrl})`}"></div>
                        <div class="card-body">
                            <h5 class="card-title">
                                <router-link to="/myproduct" class="h6 text-dark d-flex justify-content-center" @click.prevent="getProduct(item.id)">{{item.title}}</router-link>
                            </h5>
                            <p class="card-text">{{item.content}}</p>
                            <div class="d-flex justify-content-between align-items-baseline">
                                <del class="h6" v-if="item.price!== item.origin_price">NT{{item.origin_price | currency}}</del>
                                <div class="ml-auto">
                                    <div class="h5" v-if="item.price">NT{{item.price | currency}}</div>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer d-flex">
                            <router-link to="/myproduct">
                                <button type="button" class="btn btn-outline-secondary btn-sm">
                                    <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                                    查看更多
                                </button>
                            </router-link>
                            <button type="button" class="btn btn-outline-indigo btn-sm ml-auto" @click="addtoCart(item.id)">
                                <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                                加到購物車
                            </button>
                        </div>
                    </div>
                </div><!-- /.col-lg-4 -->
            </div><!-- /.row -->
        </div>
    </swiper-slide>
    <swiper-slide>
        <div class="container-fluid mb-5">
            <div class="row d-flex justify-content-center">
                <div class="" v-for="item in filterData4" :key="item.id">
                    <div class="card border-0 shadow-lg">
                        <div style="height: 150px; background-size: cover; background-position: center" :style="{backgroundImage:`url(${item.imageUrl})`}"></div>
                        <div class="card-body">
                            <h5 class="card-title">
                                <router-link to="/myproduct" class="h6 text-dark d-flex justify-content-center" @click.prevent="getProduct(item.id)">{{item.title}}</router-link>
                            </h5>
                            <p class="card-text">{{item.content}}</p>
                            <div class="d-flex justify-content-between align-items-baseline">
                                <del class="h6" v-if="item.price!== item.origin_price">NT{{item.origin_price | currency}}</del>
                                <div class="ml-auto">
                                    <div class="h5" v-if="item.price">NT{{item.price | currency}}</div>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer d-flex">
                            <router-link to="/myproduct">
                                <button type="button" class="btn btn-outline-secondary btn-sm">
                                    <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                                    查看更多
                                </button>
                            </router-link>
                            <button type="button" class="btn btn-outline-indigo btn-sm ml-auto" @click="addtoCart(item.id)">
                                <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                                加到購物車
                            </button>
                        </div>
                    </div>
                </div><!-- /.col-lg-4 -->
            </div><!-- /.row -->
        </div>
    </swiper-slide>
    <swiper-slide>
        <div class="container-fluid mb-5">
            <div class="row d-flex justify-content-center">
                <div class="" v-for="item in filterData5" :key="item.id">
                    <div class="card border-0 shadow-lg">
                        <div style="height: 150px; background-size: cover; background-position: center" :style="{backgroundImage:`url(${item.imageUrl})`}"></div>
                        <div class="card-body">
                            <h5 class="card-title">
                                <router-link to="/myproduct" class="h6 text-dark d-flex justify-content-center" @click.prevent="getProduct(item.id)">{{item.title}}</router-link>
                            </h5>
                            <p class="card-text">{{item.content}}</p>
                            <div class="d-flex justify-content-between align-items-baseline">
                                <del class="h6" v-if="item.price!== item.origin_price">NT{{item.origin_price | currency}}</del>
                                <div class="ml-auto">
                                    <div class="h5" v-if="item.price">NT{{item.price | currency}}</div>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer d-flex">
                            <router-link to="/myproduct">
                                <button type="button" class="btn btn-outline-secondary btn-sm">
                                    <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                                    查看更多
                                </button>
                            </router-link>
                            <button type="button" class="btn btn-outline-indigo btn-sm ml-auto" @click="addtoCart(item.id)">
                                <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                                加到購物車
                            </button>
                        </div>
                    </div>
                </div><!-- /.col-lg-4 -->
            </div><!-- /.row -->
        </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
</swiper>
</template>

<script>
import {
    Swiper,
    SwiperSlide
} from 'vue-awesome-swiper'

export default {
    name: 'swiper-example-change-direction',
    title: 'Change direction',
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            swiperOption: {
                slidesPerView: 5,
                spaceBetween: 50,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                breakpoints: {
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    }
                }
            },
            products: [],
            product: {},
            pagination: {},
            data: [],
            status: {
                loadingItem: '',
            },
            isLoading: false,
            cart: {
                carts: [],
            },
        }
    },
    methods: {
        getProducts() {
            const vm = this;
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPAH}/products`;
            vm.isLoading = true;
            this.$http.get(url).then((response) => {
                vm.products = response.data.products;
                vm.data = response.data.products;
                //console.log(vm.data);
                vm.isLoading = false;
            });
        },
        getProduct(id) {
            const vm = this;
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPAH}/product/${id}`;
            vm.status.loadingItem = id;
            this.$http.get(url).then((response) => {
                vm.product = response.data.product;
                //console.log(response);
                vm.status.loadingItem = '';
            });
        },
        addtoCart(id, qty = 1) {
            const vm = this;
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPAH}/cart`;
            vm.status.loadingItem = id;
            const cart = {
                product_id: id,
                qty,
            }
            this.$http.post(url, {
                data: cart
            }).then((response) => {
                //console.log(response);
                vm.status.loadingItem = '';
                vm.getCart();
                this.$bus.$emit('message:push', response.data.message, 'indigo');
                this.$router.go(0)
            });
        },
        getCart() {
            const vm = this;
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPAH}/cart`;
            vm.isLoading = true;
            this.$http.get(url).then((response) => {
                vm.cart = response.data.data;
                vm.length = response.data.data.carts.length;
                //console.log(response);
                vm.isLoading = false;
            });
        },
    },
    computed: {
        filterData() {
            const vm = this;
            const newData = [];
            vm.data.forEach((item, ) => {
                if (item.num === 8) {
                    newData.push(item);
                }
            })
            console.log(newData);
            return newData
        },
        filterData2() {
            const vm = this;
            const newData = [];
            vm.data.forEach((item, ) => {
                if (item.num === 3) {
                    newData.push(item);
                }
            })
            console.log(newData);
            return newData
        },
        filterData3() {
            const vm = this;
            const newData = [];
            vm.data.forEach((item, ) => {
                if (item.num === 7) {
                    newData.push(item);
                }
            })
            console.log(newData);
            return newData
        },
        filterData4() {
            const vm = this;
            const newData = [];
            vm.data.forEach((item, ) => {
                if (item.num === 9) {
                    newData.push(item);
                }
            })
            console.log(newData);
            return newData
        },
        filterData5() {
            const vm = this;
            const newData = [];
            vm.data.forEach((item, ) => {
                if (item.num === 1) {
                    newData.push(item);
                }
            })
            console.log(newData);
            return newData
        },
    },
    created() {
        this.getProducts();
        this.getCart();
    },
}
</script>

<style>
@media (min-width: 768px) {
    .swiper-wrapper {
        width: 100%;
    }
}
</style>
