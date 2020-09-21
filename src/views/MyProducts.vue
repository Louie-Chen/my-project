<template>
<div class="my-4">
    <loading :active.sync="isLoading"></loading>
    <CartNavbar :cartInfo="cartList" :isLoading="status.loadingItem" @refreshCart="getCart"></CartNavbar>
    <div class="container-fluid">
        <div class="row d-flex justify-content-center">
            <div class="col-12 inner mb-3"> </div>
            <div class="row col-xl-10 col-lg-10 col-md-12">

                <div class="col-xl-3  col-md-3 col-sm-4  mb-3 menu">
                    <div class="list-group" id="list-tab" role="tablist">
                        <a class="list-group-item list-group-item-action active" style="color:black;" id="list-all-list" data-toggle="list" href="#list-all" role="tab" aria-controls="all" @click="closeMore">
                            <span class="">
                                <font-awesome-icon :icon="['fas' ,'shopping-bag']" style="font-size:25px; margin-left: 3px;"></font-awesome-icon>
                            </span>
                            <span class="ml-2">全部商品</span>

                        </a>
                        <a class="list-group-item list-group-item-action" style="color:black;" id="list-Mouse-list" data-toggle="list" href="#list-Mouse" role="tab" aria-controls="Mouse" @click="closeMore">
                            <font-awesome-icon :icon="['fas' ,'mouse']" style="font-size:25px; margin-left: 4px;"></font-awesome-icon>
                            <span class="ml-2">電競滑鼠</span>

                        </a>
                        <a class="list-group-item list-group-item-action" style="color:black;" id="list-Keyboard-list" data-toggle="list" href="#list-Keyboard" role="tab" aria-controls="Keyboard" @click="closeMore">
                            <font-awesome-icon :icon="['fas' ,'keyboard']" style="font-size:25px;"></font-awesome-icon>
                            <span class="ml-2">電競鍵盤</span>

                        </a>
                        <a class="list-group-item list-group-item-action" style="color:black;" id="list-Screen-list" data-toggle="list" href="#list-Screen" role="tab" aria-controls="Screen" @click="closeMore">
                            <font-awesome-icon :icon="['fas' ,'desktop']" style="font-size:25px;"></font-awesome-icon>
                            <span class="ml-2">電競螢幕</span>

                        </a>
                        <a class="list-group-item list-group-item-action" style="color:black;" id="list-Headset-list" data-toggle="list" href="#list-Headset" role="tab" aria-controls="Headset" @click="closeMore">
                            <font-awesome-icon :icon="['fas' ,'headset']" style="font-size:25px;"></font-awesome-icon>
                            <span class="ml-2">電競耳機</span>

                        </a>
                    </div>
                </div>
                <div class="col-xl-9  col-md-9 col-sm-8  box-card-bg" style="margin-top:-1.5rem;">
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="list-all" role="tabpanel" aria-labelledby="list-all-list">
                            <div class="row mt-4" v-if="isShow === false">
                                <div class="col-xl-6  col-md-6 mb-4 box-card" v-for="item in products" :key="item.id">
                                    <div class="card border-0 shadow-lg">
                                        <div style="height: 150px; background-size: cover; background-position: center;" :style="{backgroundImage:`url(${item.imageUrl})`}"></div>
                                        <div class="card-body">
                                            <h5 class="card-title text-center">
                                                <p class="text-dark " @click="showMore" @click.prevent="getProduct(item.id)">{{item.title}}</p>
                                            </h5>

                                            <div class="d-flex justify-content-between align-items-baseline">
                                                <div class="h5" v-if="!item.price">{{item.origin_price}}</div>
                                                <del class="h6" v-if="item.price!=item.origin_price">原價 {{item.origin_price | currency}}</del>
                                                <div class="h5 bg-danger text-white ml-auto" v-if="item.price">現在只要 {{item.price | currency}}</div>
                                            </div>
                                        </div>
                                        <div class="card-footer d-flex">

                                            <button type="button" class="btn btn-outline-secondary btn-sm" @click="showMore" @click.prevent="getProduct(item.id)">
                                                <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                                                <font-awesome-icon :icon="['fas' ,'search']"></font-awesome-icon>
                                                詳細內容
                                            </button>

                                            <button type="button" class="btn btn-outline-indigo btn-sm ml-auto" @click="addtoCart(item.id)">
                                                <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                                                <font-awesome-icon :icon="['fas' ,'cart-plus']"></font-awesome-icon>
                                                加到購物車
                                            </button>
                                        </div>
                                    </div>

                                </div>
                                <div class="container">
                                    <div class="row d-flex justify-content-center mb-3">
                                        <pagination :pages="pagination" @changedpage="getProducts2"></pagination>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="tab-pane fade" id="list-Mouse" role="tabpanel" aria-labelledby="list-Mouse-list">
                            <div class="row mt-4 " v-if="isShow === false">
                                <div class="col-xl-6  col-md-6 mb-4 box-card" v-for="item in filterMouseData" :key="item.id">
                                    <div class="card border-0 shadow-lg">
                                        <div style="height: 150px; background-size: cover; background-position: center" :style="{backgroundImage:`url(${item.imageUrl})`}"></div>
                                        <div class="card-body">
                                            <h5 class="card-title text-center">
                                                <a href="#" class="text-dark " @click="showMore" @click.prevent="getProduct(item.id)">{{item.title}}</a>
                                            </h5>

                                            <div class="d-flex justify-content-between align-items-baseline">
                                                <div class="h5" v-if="!item.price">{{item.origin_price}}</div>
                                                <del class="h6 " v-if="item.price!=item.origin_price">原價 {{item.origin_price | currency}}</del>
                                                <div class="h5 bg-danger text-white ml-auto" v-if="item.price">現在只要 {{item.price | currency}}</div>
                                            </div>
                                        </div>
                                        <div class="card-footer d-flex">

                                            <button type="button" class="btn btn-outline-secondary btn-sm" @click="showMore" @click.prevent="getProduct(item.id)">
                                                <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                                                <font-awesome-icon :icon="['fas' ,'search']"></font-awesome-icon>
                                                詳細內容
                                            </button>

                                            <button type="button" class="btn btn-outline-indigo btn-sm ml-auto" @click="addtoCart(item.id)">
                                                <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                                                <font-awesome-icon :icon="['fas' ,'cart-plus']"></font-awesome-icon>
                                                加到購物車
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="container">
                                    <div class="row d-flex justify-content-center mb-3">
                                        <pagination :pages="pagination" @changedpage="filterMouseData"></pagination>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="list-Keyboard" role="tabpanel" aria-labelledby="list-Keyboard-list">
                            <div class="row mt-4" v-if="isShow === false">
                                <div class="col-xl-6  col-md-6 mb-4 box-card" v-for="item in filterKeyboardData" :key="item.id">
                                    <div class="card border-0 shadow-lg">
                                        <div style="height: 150px; background-size: cover; background-position: center" :style="{backgroundImage:`url(${item.imageUrl})`}"></div>
                                        <div class="card-body">
                                            <h5 class="card-title text-center">
                                                <a href="#" class="text-dark " @click="showMore" @click.prevent="getProduct(item.id)">{{item.title}}</a>
                                            </h5>

                                            <div class="d-flex justify-content-between align-items-baseline">
                                                <div class="h5" v-if="!item.price">{{item.origin_price}}</div>
                                                <del class="h6" v-if="item.price!=item.origin_price">原價 {{item.origin_price | currency}}</del>
                                                <div class="h5 bg-danger text-white ml-auto" v-if="item.price">現在只要 {{item.price | currency}}</div>
                                            </div>
                                        </div>
                                        <div class="card-footer d-flex">

                                            <button type="button" class="btn btn-outline-secondary btn-sm" @click="showMore" @click.prevent="getProduct(item.id)">
                                                <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                                                <font-awesome-icon :icon="['fas' ,'search']"></font-awesome-icon>
                                                詳細內容
                                            </button>

                                            <button type="button" class="btn btn-outline-indigo btn-sm ml-auto" @click="addtoCart(item.id)">
                                                <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                                                <font-awesome-icon :icon="['fas' ,'cart-plus']"></font-awesome-icon>
                                                加到購物車
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="container">
                                    <div class="row d-flex justify-content-center mb-3">
                                        <pagination :pages="pagination" @changedpage="filterKeyboardData"></pagination>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="list-Screen" role="tabpanel" aria-labelledby="list-Screen-list">
                            <div class="row mt-4" v-if="isShow === false">
                                <div class="col-xl-6  col-md-6 mb-4 box-card" v-for="item in filterScreenData" :key="item.id">
                                    <div class="card border-0 shadow-lg">
                                        <div style="height: 150px; background-size: cover; background-position: center;" :style="{backgroundImage:`url(${item.imageUrl})`}"></div>
                                        <div class="card-body">
                                            <h5 class="card-title text-center">
                                                <a href="#" class="text-dark " @click="showMore" @click.prevent="getProduct(item.id)">{{item.title}}</a>
                                            </h5>

                                            <div class="d-flex justify-content-between align-items-baseline">
                                                <div class="h5" v-if="!item.price">{{item.origin_price}}</div>
                                                <del class="h6" v-if="item.price!=item.origin_price">原價 {{item.origin_price | currency}}</del>
                                                <div class="h5 bg-danger text-white ml-auto" v-if="item.price">現在只要 {{item.price | currency}}</div>
                                            </div>
                                        </div>
                                        <div class="card-footer d-flex">

                                            <button type="button" class="btn btn-outline-secondary btn-sm" @click="showMore" @click.prevent="getProduct(item.id)">
                                                <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                                                <font-awesome-icon :icon="['fas' ,'search']"></font-awesome-icon>
                                                詳細內容
                                            </button>

                                            <button type="button" class="btn btn-outline-indigo btn-sm ml-auto" @click="addtoCart(item.id)">
                                                <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                                                <font-awesome-icon :icon="['fas' ,'cart-plus']"></font-awesome-icon>
                                                加到購物車
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="container">
                                    <div class="row d-flex justify-content-center mb-3">
                                        <pagination :pages="pagination" @changedpage="filterScreenData"></pagination>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="list-Headset" role="tabpanel" aria-labelledby="list-Headset-list">
                            <div class="row mt-4" v-if="isShow === false">
                                <div class="col-xl-6  col-md-6 mb-4 box-card" v-for="item in filterHeadsetData" :key="item.id">
                                    <div class="card border-0 shadow-lg">
                                        <div style="height: 150px; background-size: cover; background-position: center" :style="{backgroundImage:`url(${item.imageUrl})`}"></div>
                                        <div class="card-body">
                                            <h5 class="card-title text-center">
                                                <a href="#" class="text-dark " @click="showMore" @click.prevent="getProduct(item.id)">{{item.title}}</a>
                                            </h5>

                                            <div class="d-flex justify-content-between align-items-baseline">
                                                <div class="h5" v-if="!item.price">{{item.origin_price}}</div>
                                                <del class="h6" v-if="item.price!=item.origin_price">原價 {{item.origin_price | currency}}</del>
                                                <div class="h5 bg-danger text-white ml-auto" v-if="item.price">現在只要 {{item.price | currency}}</div>
                                            </div>
                                        </div>
                                        <div class="card-footer d-flex">
                                            <button type="button" class="btn btn-outline-secondary btn-sm" @click="showMore" @click.prevent="getProduct(item.id)">
                                                <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                                                <font-awesome-icon :icon="['fas' ,'search']"></font-awesome-icon>
                                                詳細內容
                                            </button>
                                            <button type="button" class="btn btn-outline-indigo btn-sm ml-auto" @click="addtoCart(item.id)">
                                                <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                                                <font-awesome-icon :icon="['fas' ,'cart-plus']"></font-awesome-icon>
                                                加到購物車
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="container">
                                    <div class="row d-flex justify-content-center mb-3">
                                        <pagination :pages="pagination" @changedpage="filterHeadsetData"></pagination>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <transition>
                        <div class="container mt-4">
                            <div class="row d-flex justify-content-center" v-show="isShow" v-if="isShow === true">
                                <div class="col-lg-12 col-md-12">
                                    <div class="row d-flex justify-content-center">
                                        <div class="col-lg-5 col-md-6 mt-4">
                                            <div class="row d-flex justify-content-center">
                                                <img :src="product.imageUrl" class="img-fluid" width="65%" alt />
                                            </div>
                                        </div>
                                        <div class="col-lg-7 col-md-6 box-contant">
                                            <div class="row">
                                                <div class="col-lg-8 col-md-8 ">
                                                    <div class="product-item mt-3">
                                                        <h2 class="card-title">{{ product.title }}</h2>
                                                        <p>全台獨家代理</p>
                                                        <div class="d-flex justify-content-between align-items-baseline">
                                                            <div class="h4" v-if="!product.price">{{ product.origin_price | currency }} 元</div>
                                                            <del class="h6" v-if="product.price != product.origin_price">原價 {{ product.origin_price | currency }} 元</del>
                                                            <div class="h5 text-danger ml-auto" v-if="product.price">現在只要 {{ product.price | currency }} 元</div>
                                                        </div>
                                                        <hr>
                                                        <select name class="form-control mt-3" v-model="product.num">
                                                            <option :value="num" v-for="num in 10" :key="num">選購 {{num}} {{product.unit}} </option>
                                                        </select>
                                                        <div class="modal-footer mt-3">
                                                            <div class="text-muted text-nowrap mr-3">
                                                                小計
                                                                <strong>{{ product.num * product.price | currency }}</strong> 元
                                                            </div>
                                                            <!-- 加入購物車 (要帶數量 product.num) -->
                                                            <button type="button" class="btn btn-indigo" @click="addtoCart(product.id,product.num)">
                                                                <i class="fas fa-spinner fa-spin" v-if="product.id ===status.loadingItem"></i>
                                                                <font-awesome-icon :icon="['fas' ,'cart-plus']"></font-awesome-icon>
                                                                加到購物車
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-12 col-xl-12 mb-5">
                                    <hr>
                                    <h2 class="text-center mt-2">{{ product.title }}</h2>
                                    <div class="d-flex justify-content-center mt-3">
                                        <pre class="h5">{{product.description}}</pre>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </transition>
                </div>

            </div>

        </div>
    </div>

</div>
</template>

<script>
import Pagination from './Pagination';
import CartNavbar from '../views/CartNavbar'
export default {
    components: {
        Pagination,
        CartNavbar
    },
    data() {
        return {
            products: [],
            pagination: {},
            isShow: false,
            product: {},
            data: [],
            status: {
                loadingItem: '',
            },
            isLoading: false,
            cartList: {
                data: {
                    carts: [],
                }
            },
            quantity: 0,
            duplicate: false,
            duplicateID: ''
        }
    },

    methods: {
        getProducts2(page = 1) {
            const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products?page=${page}`
            const vm = this;
            console.log(process.env.VUE_APP_APIPATH, process.env.VUE_APP_CUSTOMPATH);
            vm.isLoading = true;
            this.$http.get(api).then((response) => {
                console.log(response.data);
                vm.isLoading = false;
                vm.products = response.data.products;
                vm.pagination = response.data.pagination;
            });
        },
        getProducts() {
            const vm = this;
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products`;
            vm.isLoading = true;
            this.$http.get(url).then((response) => {
                vm.products = response.data.products;
                vm.data = response.data.products;
                console.log(vm.data);
                vm.isLoading = false;
            });
        },
        getProduct(id) {
            const vm = this;
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/product/${id}`;
            vm.status.loadingItem = id;
            this.$http.get(url).then((response) => {
                vm.product = response.data.product;
                // console.log(response);
                vm.status.loadingItem = '';
            });
        },
        getCart() {
            const vm = this;
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
            vm.isLoading = true;
            this.$http.get(url).then(response => {
                vm.cartList = response.data;
                //console.log(response);
                vm.isLoading = false;
            });
        },
        addtoCart(id, qty = 1) {
            const vm = this;
            vm.status.loadingItem = id;
            vm.cartList.data.carts.filter(function (item) {
                if (vm.status.loadingItem === item.product_id) {
                    vm.duplicate = true
                    vm.duplicateID = item.id
                    vm.quantity = qty + item.qty
                }
            })
            if (vm.duplicate) {
                const del = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart/${vm.duplicateID}`;
                const add = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
                const duplicateItem = {
                    product_id: id,
                    qty: vm.quantity
                }
                vm.$http.delete(del).then(() => {
                    return vm.$http.post(add, {
                        data: duplicateItem
                    })
                }).then((response) => {
                    this.$bus.$emit('message:push', response.data.message, 'indigo');
                    vm.getCart()
                    vm.status.loadingItem = ''
                })
            } else {
                const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/cart`;
                const cart = {
                    product_id: id,
                    qty,
                }
                vm.$http.post(api, {
                    data: cart
                }).then(response => {
                    if (response.data.success) {
                        vm.status.loadingItem = ''
                        this.$bus.$emit('message:push', response.data.message, 'indigo');
                        vm.getCart()
                    } else {
                        this.$bus.$emit('message:push', response.data.message, 'indigo');
                        vm.status.loadingItem = ''
                    }
                })
            }
            vm.quantity = 1
        },

        showMore() {
            this.isShow = true;
        },
        closeMore() {
            this.isShow = false;
        },
    },
    computed: {
        filterMouseData() {
            const vm = this;
            const newData = [];
            vm.data.forEach((item, ) => {
                if (item.category == '滑鼠') {
                    console.log(item);
                    newData.push(item);
                }
            })
            console.log(newData);
            return newData
        },
        filterKeyboardData() {
            const vm = this;
            const newData = [];
            vm.data.forEach((item, ) => {
                if (item.category == '鍵盤') {
                    console.log(item);
                    newData.push(item);
                }
            })
            console.log(newData);
            return newData
        },
        filterScreenData() {
            const vm = this;
            const newData = [];
            vm.data.forEach((item, ) => {
                if (item.category == '螢幕') {
                    console.log(item);
                    newData.push(item);
                }
            })
            console.log(newData);
            return newData
        },
        filterHeadsetData() {
            const vm = this;
            const newData = [];
            vm.data.forEach((item, ) => {
                if (item.category == '耳機') {
                    console.log(item);
                    newData.push(item);
                }
            })
            console.log(newData);
            return newData
        },
    },
    created() {
        this.productId = this.$route.params.productId
        this.getProducts2();
        this.getProducts();
        this.getCart();
    },
}
</script>

<style>
.h5 {
    font-size: 18px !important;
}

.h6 {
    font-size: 12px !important;
}

.text-dark {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

}

.list-group-item.active {
    background-color: #7878FF;
    border-color: #7878FF;
    text-align: center;
}

.list-group-item {
    background-color: #D9D9D9;
}

.list-group-item-action {
    text-align: center;
}

.page-item.disabled .page-link {
    background-color: rgba(0, 0, 0, 0) !important;
    border: 0px;
}

.page-item.active .page-link {
    background-color: #7878FF;
    border-color: #7878FF;
    color: #1AFF19;
}

.modal-footer {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.card {
    background-color: #D9D9D9;

}

.page-link {
    border: 0px;
    background-color: rgba(0, 0, 0, 0);
    border-color: #7878FF;
    color: black;
}

.shadow-lg {
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.5) !important;
}

.inner {
    background-image: url(https://upload.cc/i1/2020/09/21/8rJbKY.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding-bottom: 28%;
}

@media(min-width: 1275px) {
    .menu {
        max-width: 17.666666%;
        flex: 0 0 17.66667%;
    }

    .box-card-bg {
        max-width: 82.333333%;
        flex: 0 0 82.33333%;
    }

    .box-card {
        max-width: 33.333333%;
        flex: 0 0 33.33333%;
    }
}
</style>
