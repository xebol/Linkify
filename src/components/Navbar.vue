<template>
  <nav>
    <h1>{{ title }}</h1>
  </nav>
</template>

<script>
/* eslint-disable */
export default {
  name: "Navbar",
  props: {
    title: String
  }
};
</script>


<style scoped>
* {
  box-sizing: border-box;
}

nav {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: blue;
  color: antiquewhite;
  height: 120px;
  width: 100%;
  position: fixed;
}
</style>