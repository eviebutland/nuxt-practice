<template>
  <div>
    <nuxt-link to="/jokes">Back to jokes</nuxt-link>
    {{$route.params.id}}
    <p>{{joke.joke}}</p>
  </div>
  
</template>
<script>
import axios from 'axios'
import joke from '~/components/Joke.vue'

export default {
  name: 'single-joke',
  components: {
    joke
  },
  data() {
    return {
      joke: {}
    }
  },
  async created() {
    const config = {
      headers: {
        Accept:'application/json'
      }
    }
    try {
      const res = await axios.get(`https://icanhazdadjoke.com/j/${this.$route.params.id}`, config )
      console.log(res.data) // returns 404
      this.joke = res.data
    } catch (error) {
      console.log(error)
    }
  }
}
</script>