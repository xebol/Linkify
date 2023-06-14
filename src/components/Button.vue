<template>
  <button @click="onClick()" v-bind:style="{background: color}" class="btn">{{ text }}</button>
</template>


<script>
  export default {
    name: "Button",
    props: {
      text: String,
      color: String
    },
    methods: {
      //adding a method when an event is defined
      onClick() {
        this.$emit('btn-click')
      }
    }
  }
</script>