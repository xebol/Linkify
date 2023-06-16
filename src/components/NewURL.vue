<template>
  <div class="newly-shortened-url">
    <div class="new-short-url">
      <h3>New URL for: https://http.cat/ </h3>
      <h5>Shortened URL: aJ48lW</h5>
      <form class="create-new-url" @submit="onSubmit">
        <label>Create another URL</label>
        <input v-model="newLongURL" type="newLongURL" name="newLongURL" placeholder="http://" required>
        <Button :text="createNewUrl" type="submit" id="shorten-new-url" />
      </form>
    </div>
  </div>
</template>


<script>
import { generateRandomString } from '@/helper-functions';
import Button from './Button.vue';

export default {
  name: "NewURL",
  components: {
    Button
  },
  data() {
    return {
      createNewUrl: "Submit",
      newLongURL: ""
    };
  },
  methods: {
    onSubmit(event) {
      console.log('Submit another new URL');
      event.preventDefault();

      const createNewUrl = {
        id: Math.floor(Math.random() * 100000),
        shortURL: generateRandomString(),
        longURL: this.newLongURL,
        userID: generateRandomString()
      };

      this.$emit('submit-new-url', createNewUrl);

      //return the default input once form is submitted
      this.newLongURL = "";
      console.log(createNewUrl);
    }
  },
  emits: ['submit-new-url']
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