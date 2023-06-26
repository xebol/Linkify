<template>
  <div class="urls-table">
    <div class="new-url">
      <h1>My URLs</h1>
      <Button :text="addUrl" id="add-url" type="submit" @click="$emit('add-url')" />
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Shortened URL</th>
          <th scope="col">Long URL</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr :key="url.id" v-for="url in urls">
          <td> <a :href="url.longURL">{{ url.shortURL }} </a></td>
          <td> {{ url.longURL }}</td>
          <!-- emit custom event for deleting a url -->
          <td><Button :text="deleteUrl" id="delete-url" type="submit" @click="$emit('delete-url', url.id)" /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import Button from './Button.vue';
export default {
  name: "MyURLs",
  props: {
    urls: Array,
  },
  components: {
    Button
  },
  data() {
    return {
      addUrl: 'Add',
      deleteUrl: 'Delete'
    };
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bungee&family=Manrope&family=Montserrat&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bungee&family=Manrope&family=Montserrat&family=Plus+Jakarta+Sans:wght@600&display=swap');

.urls-table {
  padding-top: 120px;
  padding-left: 25px;
  padding-right: 25px;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 15px;
  text-align: left;
  font-family: 'Manrope', sans-serif;

}

td {
  font-size: 1.5em;
}

thead {
  background-color: #B1D8B7;
  font-size: 1.5em;
  font-family: 'Manrope', sans-serif;

}

tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

tbody tr:hover {
  background-color: #e6e6e6;
}

#delete-url {
  width: 100px;
  padding: 10px;
  padding-top: 10px;
  background-color: #d63b1c;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: medium;
}

#add-url {
  width: 100px;
  background-color: #618166;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: medium;
}

#add-url:hover {
  background-color: #B2D2A4;
}
.new-url {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-top: -120px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  padding-left: 10px
;
}

button[type="submit"]:hover {
  background-color: #130d05;
}</style>