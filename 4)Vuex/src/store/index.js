import { createStore } from 'vuex'
import cartModule from './modules/cart'
import productsModule from './modules/products'

/*
  STATE - global data;
  BUILD:
    state() {
      value: {}
    }
  USAGE INSIDE COMPONENTS (BAD PRACTICE): this.$store.state.value
 */
const store = createStore({
  modules: {
    cartModule,
    productsModule
  },
  state() {
    return {
      isLoggedIn: false
    };
  },
  getters: {
    isLoggedIn({ isLoggedIn }) {
      return isLoggedIn;
    }
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
  actions: {
    login(context) {
      context.commit('login');
    },
    logout(context) {
      context.commit('logout');
    }
  }
});

export default store;