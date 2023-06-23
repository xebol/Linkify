<template>
  <div>
    <Navbar title="LINKIFY" newUrl="Create New URL" myUrls="My URLS" />
    <MyURLs v-if="addNewUrl === 'MyURLs'" :urls="urls" @delete-url="deleteUrl" @add-url="addUrl" />
    <AddURL v-if="addNewUrl === 'AddURL'" @submit-new-url="submitUrl" />
    <NewURL v-if="addNewUrl === 'NewURL'" :newURL="urlInput" :shortenedURL="newShortUrl" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Form from "./components/Form.vue";
import MyURLs from "./components/MyURLs.vue";
import AddURL from "./components/AddURL.vue";
import NewURL from "./components/NewURL.vue";

export default
  {
    name: "App",
    components: {
      Navbar,
      Form,
      MyURLs,
      AddURL,
      NewURL
    },
    data() {
      return {
        urls: [],
        addNewUrl: 'MyURLs',
        urlInput: '',
        newShortUrl: ''
      };
    },
    created() {
      this.urls = [
        {
          id: 1,
          shortURL: "b6UTxQ",
          longURL: "https://example.com/"
        },
        {
          id: 2,
          shortURL: "i3BoGr",
          longURL: "https://guthib.com/"
        }
      ];
    },
    methods: {
      addUrl() {
        this.addNewUrl = 'AddURL';
      },
      submitUrl(url) {
        // this.addNewUrl = 'MyURLs';
        //redirect to NewURL component instead of MyURLs component
        this.addNewUrl = 'NewURL';
        this.urls = [...this.urls, url];
        this.urlInput = url.longURL;
        this.newShortUrl = url.shortURL;
      },
      deleteUrl(id) {
        this.urls = this.urls.filter((url) => url.id !== id);
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
