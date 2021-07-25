export const state = () => ({ // should always be a function
  list: 0
})

export const mutations = { // should always be an objects (actions also should be an object )
  add(state, text) {
    state.list.push({
      text,
      done: false
    })
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle(state, todo) {
    todo.done = !todo.done
  }
}