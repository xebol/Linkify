<template>
  <div class="about">
    <Navbar title="ABOUT" />
    <p>Welcome to Linkify. This app allows you to convert long URLs into shorter ones, making them easier to share and remember.</p>
    <p class="features">Features:</p>
      <p>Shorten any long URL to a compact form</p>
    <p>Get started now and simplify your links!</p>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: "About",
  components: {
    Navbar
  }
};
</script>

<style>
.about {
  text-align: center;
  padding: 20px;
}
</style>
