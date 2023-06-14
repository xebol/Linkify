<template>
  <div class="urls-table">
    <h1>My URLs</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Shortened URL</th>
          <th scope="col" >Long URL</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr :key="url.id" v-for="url in urls">
          <td> {{ url.shortURL }} </td>
          <td> {{ url.longURL }}</td>
          <!-- emit custom event for deleting a url -->
          <td><Button :text="addUrl" id="add-url"/></td>
          <td><Button :text="deleteUrl" id="delete-url" type="submit" @click="$emit('delete-url', url.id)"/></td>
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
    urls: Array
  },
  components: {
    Button
  },
  data () {
    return {
      addUrl: 'Add',
      deleteUrl: 'Delete'
    }
  }
};
</script>

<style scoped>
.urls-table {
  /* margin: 20px; */
  padding-top: 150px;
  padding-left: 25px;
  padding-right: 25px;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 15px;
  text-align: left;
}

td {
  font-size: 1.5em;
}
thead {
  background-color: #B1D8B7;
  font-size: 1.5em;
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
  padding: 10px;
  padding-top: 10px;
  background-color: #B1D8B7;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: medium;
}

#add-url:hover {
  background-color: #B2D2A4;
}

button[type="submit"]:hover {
  background-color: #bd6f16;
}
</style>