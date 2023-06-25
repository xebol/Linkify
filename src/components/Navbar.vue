<template>
  <nav>
    <button @click="redirectTo('MyURLs')">{{ title }}</button>
    <div class="nav-item">
      <button @click="redirectTo('AddURL')">{{ newUrl }}</button>
      <button @click="redirectTo('MyURLs')">{{ myUrls }}</button>
    </div>
    <p>{{ about }}</p>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    title: String,
    newUrl: String,
    myUrls: String,
    about: String
  },
  methods: {
    redirectTo(component) {
      this.$emit('nav-click', component);
    }
  }
};
</script>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bungee&family=Long+Cang&display=swap');


* {
  box-sizing: border-box;
}

nav {
  display: flex;
  align-items: center;
  background-color: rgba(8, 138, 104, 0.301);
  color: rgb(15, 15, 14);
  position: relative;
  margin-bottom: 20px;
  align-items: center;
  height: 100px;
  width: 100%;
}

button {
  width: 191px;
  background-color: transparent;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: medium;
  font-weight: bold;
  font-family: 'Bungee', cursive;
  font-size: 21px;
}
 p {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: black;
  border: none;
  font-size: medium;
  font-weight: bold;
  font-family: 'Bungee', cursive;
  font-size: 32px;
  margin-left: 70px;
}
</style>