<template>
  <footer>
    <p>Copyright &copy; 2023</p>
    <div class="footer-items">
       <router-link to="/about">About</router-link>
         <router-link to="/">Homepage</router-link>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style scoped>
body {
  margin: 0;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

a {
  color: #333;
}

footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  text-align: center;
  padding-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.footer-items {
  display: flex;
  gap: 10px;
}
</style>