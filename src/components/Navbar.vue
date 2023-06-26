<template>
  <nav>
    <div class="nav-left">
      <button id="linkify" @click="redirectTo('About')">{{ title }}</button>
    </div>
    <div class="nav-right">
      <button @click="redirectTo('AddURL')">{{ newUrl }}</button>
      <button @click="redirectTo('MyURLs')">{{ myUrls }}</button>
    </div>
    <div class="about">
      <p>{{ about }}</p>
    </div>
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
  justify-content: space-between;
  background-color: rgba(8, 138, 104, 0.301);
  color: rgb(15, 15, 14);
  position: relative;
  margin-bottom: 20px;
  height: 100px;
  width: 100%;
}

button {
  width: 191px;
  background-color: transparent;
  color: black;
  border: none;
  cursor: pointer;
  font-size: medium;
  font-weight: bold;
  font-family: 'Bungee', cursive;
  font-size: 21px;
}

.nav-left {
  display: flex;
  align-items: center;
  margin-left: 15px;
}

.nav-right {
  display: flex;
  align-items: center;
  margin-right: -850px;
}

#linkify {
  color: #08313A;
  font-size: 2em;
  margin: 10px;
}

.about {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.about p {
  background-color: transparent;
  color: black;
  border: none;
  font-size: medium;
  font-weight: bold;
  font-family: 'Bungee', cursive;
  font-size: 2.5em;
  margin-left: -1450px;
  margin-bottom: 15px;
  margin-top: 15px;
}
</style>