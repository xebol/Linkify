<template>
  <Navbar about="ABOUT" />
  <div class="about">
    <h2>Welcome to Linkify!</h2>
      <p> This app allows you to convert long URLs into shorter ones, making them easier to share and remember.</p>
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bungee&family=Montserrat&display=swap');
.about {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5em;
  text-align: center;
  width: 100%;
  padding: 10px;
}

p {
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
