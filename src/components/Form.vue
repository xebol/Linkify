<template>
  <form class="login-form">
    <div class="login">
      <h2>Login</h2>
      <label>Email</label>
      <input type="email" name="email" />
      <label>Password</label>
      <input type="password" name="password">
      <button type="submit">Login</button>
      <div class="register">
        <p>Don't have an account?</p>
        <button type="submit">Register Here</button>
      </div>
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
  max-width: 300px;
  margin: 0 auto;
  padding-top: 225px;
  border-radius: 4px;
  align-items: center;
  display: flex;

}

.login {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  background-color: rgba(8, 138, 104, 0.301);
  padding: 20px;
  font-size: 1.5em;
  width: 100%;
  border-radius: 4px;
}

.login h2 {
  padding-bottom: 15px;
}

.register p {
  padding-bottom: 5px;
  font-size: 1em;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
}

input[type="email"],
input[type="password"] {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button[type="submit"] {
  width: 150px;
  padding: 10px;
  padding-top: 10px;
  margin-bottom: 20px;
  background-color: #0e3b0f;
  color: #fff;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: medium;
}

button[type="submit"]:hover {
  background-color: #184f1b;
}
</style>