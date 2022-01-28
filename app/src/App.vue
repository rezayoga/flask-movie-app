<style>
@import url("./assets/css/style.css");
</style>
<template>
  <div id="app" class="font-sans">
    <Navigation />
    <router-view />
    <Footer />
  </div>
</template>
<script>
// @ = ./src
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
export default {
  components: {
    Navigation,
    Footer
  },
};
</script>
