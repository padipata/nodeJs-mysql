<template>
  <div id="app">
    <!-- <container></container> -->
    <router-view/>  
  </div>
</template>

<script>
  import container from './components/container.vue'
  export default {
    name: 'app',
    components: {
      container
    }
  }
</script>

<style>
  @import "assets/styles/global.scss";

  #app {
    width: 100%;
    height: 100%;
  }

</style>
