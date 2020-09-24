const book = {
  state: {
    fileName: '',
    showTitle: false,
    showSetting: -1,  // -1：不显示， 0：显示，1：进度，2：主题
    defFontSize: 16
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
      console.log(fontSize)
      state.defFontSize = fontSize
    }
  }
}

export {
    book
}
