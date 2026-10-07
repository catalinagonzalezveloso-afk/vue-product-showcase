import { mount } from '@vue/test-utils'
import ProductCard from '../../src/components/ProductCard.vue'

describe('ProductCard', () => {
  it('muestra el nombre del producto', () => {
    const store = {
      state: { favorites: { items: [] } },
      commit: jest.fn()
    }
    const product = {
      id: 1,
      title: 'Producto de prueba',
      price: 10,
      category: 'test',
      image: 'https://via.placeholder.com/150'
    }
    const wrapper = mount(ProductCard, {
      global: { mocks: { $store: store } },
      props: { product }
    })
    expect(wrapper.text()).toContain('Producto de prueba')
  })
})