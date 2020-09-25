const book = {
  state: {
    fileName: '',
    showTitle: false,
    showSetting: -1, // -1：不显示， 0：显示，1：进度，2：主题
    defFontSize: 16,
    Book: null,
    showFontFamily: false,
    defaultFontFamily: 'Default'
  },
  mutations: {
    setFileName: (state, fileName) => {
      state.fileName = fileName
    },
    setShowTitle: (state, showTitle) => {
      state.showTitle = showTitle
    },
    setShowSetting: (state, showSetting) => {
      state.showSetting = showSetting
    },
    setFont: (state, fontSize) => {
      state.defFontSize = fontSize
    },
    setBook: (state, book) => {
      state.Book = book
    }, 
    setFontFamily: (state, showFontFamily) => {
      state.showFontFamily = showFontFamily
    },
    setDefFontFamily: (state, defaultFontFamily) => {
      state.defaultFontFamily = defaultFontFamily
    }
  }
}

export {
  book
}
