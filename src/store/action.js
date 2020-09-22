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
  }
}

export default actions
