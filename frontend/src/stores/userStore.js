import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    username: '',
    isLoggedIn: false
  }),

  actions: {
    login(name) {
      this.username = name
      this.isLoggedIn = true
    },

    logout() {
      this.username = ''
      this.isLoggedIn = false
    }
  }
})
