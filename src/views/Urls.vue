<template>
  <div>
    <MyURLs v-if="addNewUrl === 'MyURLs'" :urls="urls" @delete-url="deleteUrl" @add-url="addUrl" />
    <AddURL v-if="addNewUrl === 'AddURL'" @submit-new-url="submitUrl" />
    <NewURL v-if="addNewUrl === 'NewURL'" :newURL="urlInput" :shortenedURL="newShortUrl" />
  </div>
</template>


<script>
import MyURLs from "../components/MyURLs.vue";
import AddURL from "../components/AddURL.vue";
import NewURL from "../components/NewURL.vue";


export default {
  name: 'Urls',
  components: {
    MyURLs,
    AddURL,
    NewURL,
  },
  data() {
      return {
        urls: [],
        addNewUrl: 'MyURLs',
        urlInput: '',
        newShortUrl: ''
      };
    },
    methods: {
      addUrl() {
        this.addNewUrl = 'AddURL';
      },
      async submitUrl(url) {
        const res = await fetch('api/urls', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(url)
        });

        const data = await res.json();

        //redirect to NewURL component instead of MyURLs component
        this.addNewUrl = 'NewURL';
        this.urls = [...this.urls, data];
        this.urlInput = url.longURL;
        this.newShortUrl = url.shortURL;
      },
      async deleteUrl(id) {
        const res = await fetch(`api/urls/${id}`, {
          method: 'DELETE'
        });

        res.status === 200 ? (this.urls = this.urls.filter((url) => url.id !== id)) : alert("Error deleting task");
      },
      async fetchURLs() {
        const res = await fetch('api/urls');

        const data = await res.json();

        return data;

      },
      navBarLinks(componentName) {
        console.log("I clicked the NavBar")
        if (componentName === 'AddURL') {
          this.addNewUrl = 'AddURL';
        } else if (componentName === 'MyURLs') {
          this.addNewUrl = 'MyURLs';
        }
      },
    },
    async created() {
      this.urls = await this.fetchURLs();
    },
}

</script>