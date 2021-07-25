<template>
  <div>
    <form @submit.prevent="onSubmit">
      <input v-model="text" type="text" name="search jokes" id="1" placeholder="Search jokes">
      <button type="submit"></button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'search-jokes',
  data() {
    return  {
      text: ''
    }
  },
  methods: {
    onSubmit() {
      this.$emit('search-text', this.text)
      this.text = ''
    }
  }
}
</script>