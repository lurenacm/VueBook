const book = {
  state: {
      test: 23
  },
  mutations: {
      getInfo: (state, val) => {
        state.test = val
      }
  },
  actions: {}
}

export {
    book
}
