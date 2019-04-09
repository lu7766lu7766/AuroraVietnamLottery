const type = {
  // mutation
  setInfo: 'User/setInfo',
  changePoint: 'User/changePoint',
  // action
  //
  // getters
  isAdmin: 'User/isAdmin',
  isSupplier: 'User/isSupplier',
  isGamer: 'User/isGamer'
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
  },
  getters: {
    roleID: state => _(state.info).getVal('role_id', ''),
    isAdmin: (state, getters) => _.isEqual(getters.roleID, Role.ADMIN),
    isSupplier: (state, getters) => _.isEqual(getters.roleID, Role.SUPPLIER),
    isGamer: (state, getters) => _.isEqual(getters.roleID, Role.GAMER)
  }
}