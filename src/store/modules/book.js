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
  }
}

export {
    book
}
