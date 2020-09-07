<template>
<div id="app">
    <Alert />
    <Navbar :key="$route.fullPath" />
    <router-view />
    <Footer />

</div>
</template>

<script>
import Alert from './views/AlertMessage';
import Navbar from './views/Navbar';
import Footer from './components/Footer';

export default {
    name: 'App',
    data() {
        return {

        }
    },
    components: {
        Alert,
        Navbar,
        Footer,
    },
}
</script>

<style lang="scss">
@import "./assets/all.scss";

body {
    background-color: #D9D9D9;
}
</style>
