<template>
<div class="my-5">
    <div class="container-fluid" v-if="cart.carts.length !== 0">
        <div class="row d-flex justify-content-center">
            <div class="row col-xl-6 col-lg-8">
                <div class="col-md-12 order-md-2 mb-4">
                    <h4 class="mb-3 text-center">付款資訊</h4>
                    <form class="needs-validation" novalidate @submit.prevent="createOrder">
                        <div class="form-group">
                            <label for="username">收件人姓名</label>
                            <input type="text" class="form-control" name="name" id="username" :class="{'is-invalid': errors.has('name')}" v-model="form.user.name" placeholder="輸入姓名" v-validate="'required'">
                            <span class="text-danger" v-if="errors.has('name')">姓名必須輸入</span>
                        </div>

                        <div class="form-group">
                            <label for="useremail">Email</label>
                            <input type="email" class="form-control" name="email" id="useremail" v-validate="'required|email'" :class="{'is-invalid': errors.has('email')}" v-model="form.user.email" placeholder="請輸入 Email">
                            <span class="text-danger" v-if="errors.has('email')">
                                {{errors.first('email')}}
                            </span>
                        </div>

                        <div class="form-group">
                            <label for="usertel">收件人電話</label>
                            <input type="tel" class="form-control" id="usertel" name="userTel" :class="{'is-invalid': errors.has('userTel')}" v-model="form.user.tel" placeholder="請輸入電話" v-validate="'required'">
                            <span class="text-danger" v-if="errors.has('userTel')">電話欄位不得留空</span>
                        </div>

                        <div class="form-group">
                            <label for="useraddress">收件人地址</label>
                            <input type="text" class="form-control" name="address" id="useraddress" :class="{'is-invalid': errors.has('address')}" v-model="form.user.address" placeholder="請輸入地址" v-validate="'required'">
                            <span class="text-danger" v-if="errors.has('address')">地址欄位不得留空</span>
                        </div>

                        <hr class="mb-4">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="custom-control custom-radio">
                                    <div>
                                        <input type="radio" name="pay" class="custom-control-input" id="Cash on delivery" v-model="CreditCard" :class="{'is-invalid': errors.has('pay')}" v-validate="'required'" value="one">
                                        <label class="custom-control-label" for="Cash on delivery">貨到付款</label>
                                        <span class="text-danger" v-if="errors.has('pay')">欄位不得留空</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="custom-control custom-radio">
                                    <div>
                                        <input type="radio" name="pay" class="custom-control-input" v-model="CreditCard" id="pay by credit card" value="two">
                                        <label class="custom-control-label" for="pay by credit card">信用卡支付</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr class="mb-4">
                        <div v-show="CreditCard ==='one'"></div>
                        <div v-show="CreditCard ==='two'">
                            <h4 class="mb-3">信用卡資訊</h4>
                            <div class="d-block my-3">
                                <div class="custom-control custom-radio">
                                    <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required>
                                    <label class="custom-control-label" for="credit">Credit card</label>
                                    <div class="card-image">
                                        <img src="https://upload.cc/i1/2020/08/30/gVAJZp.png" class="img-fluid" width="9%" alt="">
                                        <img src="https://www.atfx.com/gm/wp-content/uploads/sites/8/2019/07/mastercard1.svg" class="img-fluid" width="9%" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label for="cc-name">用戶名</label>
                                    <input type="text" class="form-control" name="cc-name" id="cc-name" placeholder="" required>
                                    <small class="text-danger" v-if="errors.has('cc-name')">請輸入戶名</small>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label for="cc-number">卡號</label>
                                    <input type="text" class="form-control" name="cc-number" id="cc-number" placeholder="4111-8999-6373-5555" required>
                                    <small class="text-danger" v-if="errors.has('cc-number')">請輸入正確卡號</small>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-3 mb-3">
                                    <label for="cc-expiration">到期日</label>
                                    <input type="text" class="form-control" id="cc-expiration" name="cc-expiration" placeholder="11/24" required>
                                    <small class="text-danger" v-if="errors.has('cc-expiration')">請輸入正確到期日</small>
                                </div>
                                <div class="col-md-3 mb-3">
                                    <label for="cc-cvv">CVV</label>
                                    <input type="text" class="form-control" id="cc-cvv" name="cc-cvv" placeholder="000" required>
                                    <small class="text-danger" v-if="errors.has('cc-cvv')">請輸入正確末3碼</small>
                                </div>
                            </div>
                            <hr class="mb-4">
                        </div>

                        <button class="btn btn-orange btn-lg btn-block" type="submit">訂單建立</button>
                    </form>
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
            CreditCard: 'one',
            products: [],
            product: {},
            status: {
                loadingItem: '',
            },

            isLoading: false,
            cart: {
                carts: [],
            },
            coupon_code: "",
            form: {
                user: {
                    name: '',
                    email: '',
                    tel: '',
                    address: ''
                },
                message: ''
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
                //console.log(response);
                vm.isLoading = false;
            });
        },
        getProduct(id) {
            const vm = this;
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPAH}/product/${id}`;
            vm.status.loadingItem = id;
            this.$http.get(url).then((response) => {
                vm.product = response.data.product;
                console.log(response);
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
                console.log(response);
                vm.status.loadingItem = '';
                vm.getCart();
            });
        },
        getCart() {
            const vm = this;
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPAH}/cart`;
            vm.isLoading = true;
            this.$http.get(url).then((response) => {
                vm.cart = response.data.data;
                console.log(response);
                vm.isLoading = false;
            });
        },
        removeCartItem(id) {
            const vm = this;
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPAH}/cart/${id}`;
            vm.isLoading = true;
            this.$http.delete(url).then(() => {
                vm.getCart();
                //console.log(response);
                vm.isLoading = false;
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
                console.log(response);
                vm.getCart();
                vm.isLoading = false;
            });
        },
        createOrder() {
            const vm = this;
            const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPAH}/order`;
            const order = vm.form;
            //vm.isLoading =true;
            this.$validator.validate().then((result) => {
                if (result) {
                    this.$http.post(url, {
                        data: order
                    }).then((response) => {
                        console.log('訂單已建立', response);
                        if (response.data.success) {
                            vm.$router.push(`/userorders/${response.data.orderId}`);
                            this.$bus.$emit('message:push', response.data.message, 'indigo');
                        }
                        vm.isLoading = false;
                    });
                } else {
                    console.log('欄位不完整');
                }
            });
        },
    },
    created() {
        this.getProducts();
        this.getCart();
    },
}
</script>
