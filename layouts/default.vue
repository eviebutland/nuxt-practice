<template>
  <div>
    <app-header></app-header>
  <Nuxt /> 
  <p>default layout here</p>
  </div>
  <!-- nuxt component must be added for this to be picked up as a template, <nuxt/> component represents the page you are viewing-->
</template>
<script>
import AppHeader from '~/components/AppHeader.vue'

export default {
  components: { AppHeader },
}
</script>