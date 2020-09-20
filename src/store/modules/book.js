const book = {
  state: {
    fileName: '',
    showTitle: false
  },
  mutations: {
    setFileName: (state, fileName) => {
        state.fileName = fileName
      },
    setShowTitle: (state, showTitle) => {
      state.showTitle = showTitle
    }
  },
  actions: {
    setFileName: ({ commit }, fileName) => {
     return commit('setFileName', fileName)
    },
    setShowTitle: ({ commit }, showTitle) => {
      return commit('setShowTitle', showTitle)
    }
  }
}

export {
    book
}
