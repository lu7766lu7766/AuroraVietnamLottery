import router from 'src/router'

const type = {
  // mutation
  setInfo: 'User/setInfo',
  changePoint: 'User/changePoint'
  // action
  //
  // getters
}

export { type as UserType }

export default {
  namespaced: true,
  state: {
    info: {}
  },
  mutations: {
    setInfo(state, context) {
      state.info = context
    },
    changePoint(state, point) {
      state.info.point += point
    }
  }
}