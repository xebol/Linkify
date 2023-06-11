<template>
  <Navbar title="LINKIFY" newUrl="New URL" myUrls="My URLS"/>
  <Form/>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Form from "./components/Form.vue";

export default
  {
    name: "App",
    components: {
      Navbar,
      Form
    },
  };
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
</style>
