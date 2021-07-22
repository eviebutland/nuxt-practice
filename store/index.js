export const state = () => ({ // should always be a function
  counter: 0
})

export const mutations = { // should always be an objects (actions also should be an object )
  increment(state) {
    state.counter++
  }
}