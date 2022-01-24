<template>
  <div id="app">
    <Navigation />
    <router-view />
  </div>
</template>
<script>
// @ = ./src
import Navigation from "@/components/Navigation"
export default {
  components: {
    Navigation
  }
}
</script>
