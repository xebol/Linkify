<template>
  <div>
    <MyURLs v-if="addNewUrl === 'MyURLs'" :urls="urls" @delete-url="deleteUrl" @add-url="addUrl" />
    <AddURL v-if="addNewUrl === 'AddURL'" @submit-new-url="submitUrl" />
    <NewURL v-if="addNewUrl === 'NewURL'" :newURL="urlInput" :shortenedURL="newShortUrl" />
  </div>
</template>


<script>

</script>