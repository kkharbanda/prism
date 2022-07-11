<template>
   <appheader/>

  <router-view v-if="!isLoadig"/>

  <div class="page_loader" v-else>
    <app-loader/>
  </div>
</template>

<script>
import appheader from './components/Header/Header-view'
import appLoader from './components/Utils/app-loader.vue';

import { mapGetters } from 'vuex';
export default {
  components: {
    appheader,
    appLoader,
   
  },

  computed: {
    ...mapGetters({
      toastMsg: 'notify/getToastMsg',
      isLoadig:'notify/isLoading'
    })
  },
  watch: {
    toastMsg(toastMsg) {
      if (toastMsg[0] === true) {
        if (toastMsg[2] === 'error') {
          this.$toast.error(toastMsg[1]);
        }
        if (toastMsg[2] === 'success') {
          this.$toast.success(toastMsg[1]);
        }
      }
    }
  }
}
</script>

<style>
@import './assets/style.css';
</style>
