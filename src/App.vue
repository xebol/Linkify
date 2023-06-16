<template>
  <div>
    <Navbar title="LINKIFY" newUrl="Create New URL" myUrls="My URLS" />
    <!-- <Form /> -->
    <MyURLs v-if="addNewUrl !== 'AddURL'" :urls="urls" @delete-url="deleteUrl" @add-url="addUrl"/>
    <AddURL v-if="addNewUrl === 'AddURL'" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Form from "./components/Form.vue";
import MyURLs from "./components/MyURLs.vue";
import AddURL from "./components/AddURL.vue";

export default
  {
    name: "App",
    components: {
      Navbar,
      Form,
      MyURLs,
      AddURL
    },
    data() {
      return {
        urls: [],
        addNewUrl: 'MyURLs'
      };
    },
    methods: {
      toggleComponent() {
        this.addNewUrl = this.addNewUrl === 'AddURL' ? 'AddURL' : 'MyURLs';
      }
    },
    created() {
      this.urls = [
        {
          id: 1,
          shortURL: "b6UTxQ",
          longURL: "https://example.com/",
          userID: "aJ48lW"
        },
        {
          id: 2,
          shortURL: "i3BoGr",
          longURL: "https://guthib.com/",
          userID: "aJ48lW",
        }
      ];
    },
    methods: {
      deleteUrl(id) {
        this.urls = this.urls.filter((url) => url.id != id);
      },
      addUrl() {
        this.addNewUrl = 'AddURL';
      }
    }
  };
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
</style>
