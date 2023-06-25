<template>
  <div>
    <Navbar title="ABOUT" />
    <p>Welcome to Linkify. This app allows you to convert long URLs into shorter ones, making them easier to share and remember.</p>
    <p>Features:</p>
    <ul>
      <li>Shorten any long URL to a compact form</li>
    </ul>
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
