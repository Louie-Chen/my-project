<template>
<div id="app">
    <Alert />
    <Navbar />
    <router-view />
    <Footer />
</div>
</template>

<script>
import Alert from './views/AlertMessage';
import Footer from './components/Footer';
import Navbar from './views/Navbar'
export default {
    name: 'App',
    data() {
        return {}
    },
    components: {
        Alert,
        Footer,
        Navbar,
    },
}
</script>

<style lang="scss">
@import "./assets/all.scss";

body {
    background-color: #D9D9D9;
}
</style>
