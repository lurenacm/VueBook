const actions = {
  setFileName: ({
    commit
  }, fileName) => {
    return commit('setFileName', fileName)
  },
  setShowTitle: ({
    commit
  }, showTitle) => {
    return commit('setShowTitle', showTitle)
  },
  setShowSetting: ({ commit }, showSetting) => {
    console.log(showSetting)
    return commit('setShowSetting', showSetting)
  },
  setFont: ({ commit }, fontSize) => {
    return commit('setFont', fontSize)
  },
  setBook: ({ commit }, book) => {
    return commit('setBook', book)
  }, 
  setFontFamily: ({ commit }, showFontFamily) => {
    return commit('setFontFamily', showFontFamily)
  },
  setDefFontFamily: ({ commit }, defaultFontFamily) => {
    return commit('setDefFontFamily', defaultFontFamily)
  }
}

export default actions
