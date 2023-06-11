<template>
  <nav>
    <h1>{{ title }}</h1>
    <h2>{{ newUrl }}</h2>
    <h2>{{ myUrls }}</h2>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    title: String,
    newUrl: String,
    myUrls: String
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
  justify-content: space-evenly;
  background-color: rgba(8, 138, 104, 0.301);
  color: rgb(15, 15, 14);
  height: 120px;
  width: 100%;
  position: fixed;
}
</style>