<template>
  <div>
    <p>Hello evie</p>
    <nuxt-link to="/secondPage"/>Second page</nuxt-link>
    <nuxt-link v-bind:to="'/users' " >'s Profile</nuxt-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
