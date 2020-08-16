// States
export const state = () => ({
  show: false
})

// mutations
export const mutations = {
  close(state) {
    state.show = false;
  },
  open(state) {
    state.show = true;
  },
  toggle(state) {
    state.show = !state.show;
  }
}

// Getters
export const getters = {

  show: state => state.show,

}