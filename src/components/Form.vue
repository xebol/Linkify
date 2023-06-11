<template>
    <form class="login-form">
      <div class="login">
        <label>Email</label>
        <input type="email" name="email" />
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
  max-width: 300px;
  margin: 0 auto;
  padding-top: 225px;
  border-radius: 4px;
}

.login {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  background-color:rgba(8, 138, 104, 0.301);
  padding: 20px;
  font-size: 1.5em;
  width: 100%;
  border-radius: 4px;
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
  padding: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #45a049;
}
</style>