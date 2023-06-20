<template>
  <div class="newly-shortened-url">
    <div class="new-short-url">
      <h3>New URL for: {{ newURL }}</h3>
      <h5>Short URL ID: <a :href="newURL">{{ shortenedURL }}</a></h5>
    </div>
    <a href="../App.vue">Homepage</a>
  </div>
</template>


<script>

export default {
  name: "NewURL",
  props: {
    newURL: String,
    shortenedURL: String
  }
};
</script>

<style scoped>
.newly-shortened-url {
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  align-items: center;
}

.new-short-url {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  margin-top: 120px;
  align-items: center;
  width: 90vw;
  height: 150px;
  margin-bottom: 15px;
  font-size: 1.5em;
  border-radius: 10px;
  background-color: #B1D8B7;
}

.new-short-url h5 {
  padding-top: 10px;
}

input[type="newLongURL"] {
  padding: 9px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50vw;
  height: 40px;
  margin-left: 5px;
  margin-top: 15px;
}

#shorten-new-url {
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

#shorten-new-url:hover {
  background-color: #B2D2A4;
}
</style>