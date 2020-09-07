<template>
<div>
    <loading :active.sync="isLoading"></loading>
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
        return {
            products: [],
            product: {},
            pagination: {},
            data: [],
            currentPage: 0,
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
        // getProducts(currentPage = 1) {
        //     const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products/all`
        //     const vm = this;
        //     //console.log(process.env.APIPATH, process.env.CUSTOMPATH);
        //     vm.isLoading = true;
        //     this.$http.get(api).then((response) => {
        //         if (response.data.success) {
        //             const objectProducts = response.data.products;
        //             vm.cacheProducts = [];
        //             for (const item in objectProducts) {
        //                 vm.cacheProducts.push(objectProducts[item]);
        //             }
        //             // 迴圈結束後才開始來取得資料長度
        //             vm.pagination.totalResult = vm.cacheProducts.length;
        //             // 設置每一頁資料數量
        //             vm.pagination.per_page = 3;
        //             // 統計總頁數
        //             // 公式:總長度 / 每一頁數量，另外這裡會出現小數點，所以要使用 Math.ceil 來無條件進位
        //             vm.pagination.pageTotal = Math.ceil(vm.pagination.totalResult / vm.pagination.per_page);
        //             // 接下來定義當前頁數
        //             // 通常會是 1
        //             vm.pagination.currentPage = currentPage;
        //             // 但是要注意，當前頁數是不可能超過總頁數，所以需要做一個判斷來避免
        //             if (vm.pagination.currentPage > vm.pagination.pageTotal) {
        //                 vm.pagination.currentPage = vm.pagination.pageTotal;
        //             }
        //             // 接下來當我們目前位於第二頁時，資料會是 11~20
        //             // 所以這邊會有一段公式來做計算
        //             // 假設當前位於第二頁，所以就是 (10 * 2) - 10 = 10，最後 + 1，所以最小頁數就是 11 開始
        //             // 如果不清楚的時候可以使用結果反推
        //             const minPage = (vm.pagination.currentPage * vm.pagination.per_page) - vm.pagination.per_page + 1; // 11
        //             const maxPage = (vm.pagination.currentPage * vm.pagination.per_page);
        //             vm.products = [];
        //             vm.cacheProducts.forEach((item, index) => {
        //                 // 由於 index 是從 0 開始，所以要建立一個變數儲存正確的數量
        //                 const num = index + 1;
        //                 // 接下來寫上判斷式
        //                 // 當 num 比 minPage 大並且比 maxPage 小的時候，就 push 資料進去
        //                 if (num >= minPage && num <= maxPage) {
        //                     vm.products.push(item);
        //                 }
        //             });
        //             vm.isLoading = false;
        //         }
        //     });
        // },
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
            vm.data.forEach((item, i) => {
                if (i % 4 === 0) {
                    newData.push([])
                }
                const page = parseInt(i / 4)
                newData[page].push(item)
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
