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
  }
}

export default actions
