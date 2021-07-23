<template>
  <div>
    <h1>Hello evie</h1>
    <nuxt-link v-bind:to="'/about'" >About </nuxt-link>
    <h2>Welcome to the dad jokes app</h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default {
  head() {
    return {
      title: "Welcome to page home - Dad Jokes",
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'My description for my meta tags' // adds values straight into meta tags of page (great for seo)
      }]
    }
  }
}
</script>
