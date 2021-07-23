<template>
  <div>
    <h1>Jokes here</h1>
      <search-jokes v-on:search-text="searchText"/>
      <joke v-for="joke in jokes" :key="joke.id" :id="joke.id" :joke="joke.joke"></joke>
  </div>
</template>
<script lang="ts">
import axios from 'axios'
import Joke from '~/components/Joke.vue'
import SearchJokes from '~/components/SearchJokes.vue'

export default {
  components: { 
    Joke,
    SearchJokes
  },
  data(){
    return {
      jokes: []
    }
  },
  methods: {
    async searchText(text: string) {
      const config = {
      headers: {
        Accept:'application/json'
      }
    }
    try {
      const res = await axios.get(`https://icanhazdadjoke.com/search?term=${text}`, config )
      this.jokes = res.data.results
    } catch (error) {
      console.log(error)
    }
    }
  },
  async created (){
    const config = {
      headers: {
        Accept:'application/json'
      }
    }
    try {
      const res = await axios.get('https://icanhazdadjoke.com/search', config )
      this.jokes = res.data.results
    } catch (error) {
      console.log(error)
    }
  },
  head() {
    return {
      title: 'Jokes page',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'This is the dad jokes place'
        }
      ]
    }
  }
}
</script>
