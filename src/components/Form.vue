<template>
  <form class="login-form">
    <div class="login">
      <label>Email</label>
      <input type="email" name="email" placeholder="Email" />
      <label>Password</label>
      <input type="password" name="password">
    </div>
  </form>
</template>


<script>
export default {
  name: "Form",
};
</script>


<style scoped>
  .login-form {
    display: flex;
    height: 130vh;
  }
</style>