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
a {
  color: 333;
}

footer {
  margin-top: 250px;
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