import { mount } from '@vue/test-utils'
import ProductList from '../../src/components/ProductList.vue'

describe('ProductList', () => {
  it('muestra un mensaje cuando la API falla', () => {
    const store = {
      state: {
        products: { products: [], loading: false, error: true },
        filters: { category: 'Todas' }
      },
      getters: { 'products/filteredProducts': [] },
      dispatch: jest.fn(),
      commit: jest.fn()
    }
    const wrapper = mount(ProductList, {
      global: {
        mocks: { $store: store },
        stubs: {
          'v-select': true,
          'v-alert': true,
          'v-row': true,
          'v-col': true
        }
      }
    })
    expect(wrapper.text()).toContain('No se pudieron cargar los productos.')
  })
})