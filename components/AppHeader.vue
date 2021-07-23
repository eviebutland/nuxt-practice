<template>
  <header class="header">
    <h1 class="title">dad jokes</h1>
    <ul>
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/jokes">Jokes</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">About</nuxt-link>
      </li>
    </ul>
  </header>
</template>
<script lang="ts">

export default {
  name: 'AppHeader'
}
</script>
<style>
  .header {
    
  }
</style>
