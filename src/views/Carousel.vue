<template>
<div>
    <main role="main" class="bga-back-top">
        <Inner />
        <Featurette />
        <HotProduct />
    </main>

</div>
</template>

<script>
import Inner from '../components/Inner';
import Featurette from '../components/Featurette';
import HotProduct from '../components/HotProduct';

export default {
    components: {
        Inner,
        Featurette,
        HotProduct,
    },
}
</script>
