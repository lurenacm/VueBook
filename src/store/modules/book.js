const book = {
  state: {
    fileName: '',
    showTitle: false,
    showSetting: -1,  // -1：不显示， 0：显示，1：进度，2：主题
    defaultFontSize: 16
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
    }
  }
}

export {
    book
}
