<template>
  <div>
    <Navbar title="LINKIFY" newUrl="Create New URL" myUrls="My URLS" />
    <!-- <Form /> -->
    <!-- <MyURLs :urls="urls" @delete-url="deleteUrl" @add-url="addUrl"/> -->
    <AddURL />
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
        urls: []
      };
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
        this.urls = this.urls.filter((url)=> url.id != id);
      },
      addUrl() {
        console.log('Add url here');
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
