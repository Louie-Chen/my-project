<template>
<div class="my-4">
    <div class="container-fluid" v-if="cart.carts.length === 0">
        <div class="py-5 text-center">
            <font-awesome-icon :icon="['far', 'grin-beam-sweat']" style="font-size:200px;"></font-awesome-icon>
            <h2 class="mt-2">你的購物車沒有商品</h2>
            <router-link to="/myproduct">
                <button class="btn btn-indigo btn-lg mt-2" type="submit">繼續購物</button>
            </router-link>
        </div>
    </div>
    <div class="container-fluid" v-if="cart.carts.length !== 0">
        <div class="row d-flex justify-content-center">
            <div class="row col-xl-8 my-4">
                <div class="col-md-12 my-1">
                    <table class="table table-bordered">
                        <thead style="border: 2px solid #6610f2;">
                            <th>品名</th>
                            <th width="90" class="text-center">數量</th>
                            <th width="120">單價</th>
                            <th width="30" class="text-center">刪除</th>
                        </thead>
                        <tbody style="border: 2px solid #6610f2;">
                            <tr v-for="item in cart.carts" :key="item.id">
                                <td class="align-middle">{{ item.product.title }}
                                    <div class="text-success" v-if="item.coupon">已套用優惠券</div>
                                </td>
                                <td class="align-middle text-center">{{ item.qty }}/{{ item.product.unit }}</td>
                                <td class="align-middle text-right">{{ item.final_total | currency }}</td>
                                <td class="align-middle text-center">
                                    <button type="button" class="btn btn-outline-danger btn-sm" @click="removeCartItem(item.id)">
                                        <font-awesome-icon :icon="['far' ,'trash-alt']"></font-awesome-icon>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot style="border: 2px solid #6610f2;">
                            <!-- 如果沒套用折扣，就不用顯示折扣價 -->
                            <tr v-if="cart.final_total !== cart.total">
                                <td colspan="3" class="text-right text-success">折扣價</td>
                                <td class="text-right text-success">{{ cart.final_total | currency }}</td>
                            </tr>
                            <tr>
                                <td colspan="3" class="text-right">總計</td>
                                <td class="text-right">{{ cart.total | currency }}</td>
                            </tr>

                        </tfoot>
                    </table>
                    <div class="input-group mb-3 input-group-sm">
                        <input type="text" class="form-control" placeholder="請輸入優惠碼" v-model="coupon_code">
                        <div class="input-group-append">
                            <button class="btn btn-outline-pink" type="button" @click="addCouponCode">套用優惠碼</button>
                        </div>
                    </div>
                    <div class="float-right my-3">
                        <router-link to="/myproduct">
                            <button class="btn btn-indigo btn-lg mr-2" type="submit">繼續購物</button>
                        </router-link>
                        <router-link to="checkout">
                            <button class="btn btn-orange btn-lg " type="submit">結帳去</button>
                        </router-link>
                    </div>
                </div>

            </div>

        </div>
    </div>

</div>
</template>

<script>
export default {
    data() {
        return {
            products: [],
            product: {},
            status: {
                loadingItem: '',
            },
            length: [],
            isLoading: false,
            cart: {
                carts: [],
            },
            coupon_code: "",
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
                //console.log(response);
                vm.isLoading = false;
            });
        },
        removeCartItem(id) {
            const vm = this;
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPAH}/cart/${id}`;
            vm.isLoading = true;
            this.$http.delete(url).then(() => {
                vm.getCart();
                vm.isLoading = false;
                this.$router.go(0)
            });
        },
        addCouponCode() {
            const vm = this;
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPAH}/coupon`;
            const coupon = {
                code: vm.coupon_code
            }
            vm.isLoading = true;
            this.$http.post(url, {
                data: coupon
            }).then((response) => {
                if (response.data.success) {
                    console.log(response);
                    vm.getCart();
                } else {
                    this.$bus.$emit('message:push', response.data.message, 'danger');
                }
                vm.isLoading = false;
            });
        },

    },
    created() {
        this.getCart();
    },
}
</script>

<style>
.table-bordered {
    border: 2px solid #6610f2;
}

.table-bordered thead th,
.table-bordered {
    border: 2px solid #6610f2;
}

.table-bordered th,
.table-bordered td {
    border: 2px solid #6610f2;
}
</style>
