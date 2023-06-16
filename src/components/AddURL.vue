<template>
  <h3>Shorten URL</h3>
  <form class="create-new-url">
    <div class="shorten-url">
      <label>Enter long URL:</label>
      <input type="fullURL" name="fullURL" placeholder="http://" />
      <Button :text="createNewURL" type="submit" id="newUrl" />
    </div>
  </form>
</template>


<script>
import Button from './Button.vue';

export default {
  name: "AddURL",
  components: {
    Button
  },
  data() {
    return {
      createNewURL: "Submit"
    };
  }
};
</script>


<style scoped>
h3 {
  padding-top: 150px;
  font-size: 2em;
  padding-left: 40px;
}

.create-new-url {
  width: 95vw;
  margin: 0 auto;
  padding-top: 10px;
  border-radius: 4px;
  align-items: center;
  display: flex;
}

.shorten-url {
  display: flex;
  padding: 15px;
  align-items: center;
  width: 300%;
  height: 150px;
  margin-bottom: 15px;
  font-size: 1.5em;
  border-radius: 10px;
  background-color: rgba(8, 138, 104, 0.301)
}

input[type="fullURL"] {
  padding: 9px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50vw;
  height: 40px;
  margin-left: 5px;
}

#newUrl {
  width: 100px;
  background-color: #618166;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: medium;
  padding: 7px;
  margin-left: 5px;
}

#newUrl:hover {
  background-color: #B2D2A4;
}
</style>