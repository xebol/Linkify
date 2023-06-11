<template>
  <nav>
    <h1>{{ title }}</h1>
    <div class="nav-item">
      <h2>{{ newUrl }}</h2>
      <h2>{{ myUrls }}</h2>
    </div>
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
  align-items: center;
  height: 130px;
  width: 100%;
  padding-left: 10px;
}

.nav-item {
  display: flex;
  padding-left: 25px;
}
.nav-item h2{
  padding-right: 25px;
}
</style>