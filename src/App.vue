<template>
  <appheader></appheader>
  <router-view></router-view>
</template>

<script>
import appheader from './components/Header/Header-view'
export default {
  components: {
    appheader
  }

}
</script>

<style>
@import './assets/style.css';
</style>
