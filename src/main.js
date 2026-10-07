import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const store = createStore({
  modules: {
    products: {
      namespaced: true,
      state: () => ({
        products: [],
        loading: false,
        error: false
      }),
      getters: {
        filteredProducts(state, getters, rootState) {
          const category = rootState.filters.category
          if (category === 'Todas') return state.products
          return state.products.filter(
            product => product.category === category
          )
        }
      },
      mutations: {
        SET_PRODUCTS(state, products) {
          state.products = products
        },
        SET_LOADING(state, value) {
          state.loading = value
        },
        SET_ERROR(state, value) {
          state.error = value
        }
      },
      actions: {
        async fetchProducts({ commit }) {
          commit('SET_LOADING', true)
          commit('SET_ERROR', false)

          try {
            const response = await fetch(
              'https://fakestoreapi.com/products'
            )

            if (!response.ok) {
              throw new Error('Error de API')
            }

            const products = await response.json()
            commit('SET_PRODUCTS', products)
          } catch (error) {
            commit('SET_ERROR', true)
          } finally {
            commit('SET_LOADING', false)
          }
        }
      }
    },

    filters: {
      namespaced: true,
      state: () => ({
        category: 'Todas'
      }),
      mutations: {
        SET_CATEGORY(state, category) {
          state.category = category
        }
      }
    },

    favorites: {
      namespaced: true,
      state: () => ({
        items: []
      }),
      mutations: {
        TOGGLE_FAVORITE(state, product) {
          const index = state.items.findIndex(
            item => item.id === product.id
          )

          if (index >= 0) {
            state.items.splice(index, 1)
          } else {
            state.items.push(product)
          }
        }
      }
    }
  }
})

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light'
  }
})

createApp(App)
  .use(store)
  .use(vuetify)
  .mount('#app')
