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
  setBook: ({ commit }, Book) => {
    return commit('setBook', Book)
  }
}

export default actions
