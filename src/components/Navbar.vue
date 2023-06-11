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
  background-color: rgba(8, 138, 104, 0.301);
  color: rgb(15, 15, 14);
  position: fixed;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 130px;
  width: 100%;
}
</style>