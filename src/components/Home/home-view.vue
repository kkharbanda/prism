<template>
    <div class="container-fluid">
        <app-carrousel :slides ="homearticles" />
        <apphomecard :articles = "homearticles" />
    </div>
</template>

<script>
import appCarrousel from '../Utils/app-carousal.vue';
import apphomecard from './feautured-view.vue'
export default {
    components: {
        appCarrousel,
        apphomecard
    },
    data() {
        return {
            homearticles: [
                { id: 1 },
                { id: 2 },
                { id: 3 },
                { id: 4 },
                { id: 5 },
                { id: 6 },
            ]
        }
    }
}
</script>