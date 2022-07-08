<template>
  <appheader></appheader>
  <router-view></router-view>
</template>

<script>
import appheader from './components/Header/Header-view'
import { mapGetters } from 'vuex';
export default {
  components: {
    appheader
  },

  computed: {
    ...mapGetters({
      toastMsg: 'notify/getToastMsg'
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
