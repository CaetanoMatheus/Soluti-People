export default {
  setUsers: (state, data) => {
    state.users = data
  },
  setUser: (state, data) => {
    state.user = data
  },
  setUserTelephones: (state, data) => {
    state.user.telephones = data
  },
  setUserAddress: (state, data) => {
    state.user.address = data
  },
}
