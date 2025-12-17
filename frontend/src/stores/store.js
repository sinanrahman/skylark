import { createStore } from 'vuex'
import api from '@/services/api'

const store = createStore({
  state() {
    return {
      user: null
    }
  },

  getters: {
    isLoggedIn(state) {
      return !!state.user
    },
    isAdmin(state) {
      return state.user?.role === 'admin'
    },
    userName(state) {
      return state.user?.name
    }
  },

  mutations: {
    SET_USER(state, user) {
      state.user = user
    },
    CLEAR_USER(state) {
      state.user = null
    }
  },

  actions: {
    login({ commit }, user) {
      commit('SET_USER', user)
    },

    async fetchUser({ commit }) {
      try {
        const res = await api.get('/profile', {
          withCredentials: true
        })
        commit('SET_USER', res.data.user)
      } catch {
        commit('CLEAR_USER')
      }
    },

    async logout({ commit }) {
      await api.get('/logout')
      commit('CLEAR_USER')
    }
  }
})

export default store
// export default store
