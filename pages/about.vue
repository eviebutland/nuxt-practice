<template>
  <div>
    <h1>About Dad jokes api</h1>
    <p>This is an app that displays dad jokes, following a tutorial</p>
  </div>
</template>

<script>
  export default {
    head() {
      return {
        title: "About the app - Dad Jokes",
        meta: [{
          hid: 'description',
          name: 'description',
          content: 'My description for my meta tags' // adds values straight into meta tags of page (great for seo)
        }]
      }
    },
    layout: 'myCustomLayout'
  }
</script>

<style>
  .red {
    color: red;
  }
</style>
