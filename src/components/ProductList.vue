<template>
  <div>
    <v-select
      v-model="category"
      :items="categories"
      label="Filtrar por categoría"
      data-cy="category-filter"
      class="mb-6"
    ></v-select>

    <div v-if="loading" class="text-center py-8">Cargando productos...</div>

    <v-alert v-else-if="error" type="error" data-testid="api-error">
      No se pudieron cargar los productos.
    </v-alert>

    <v-alert v-else-if="products.length === 0" type="info">
      No hay productos para mostrar.
    </v-alert>

    <v-row v-else>
      <v-col
        v-for="product in products"
        :key="product.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        data-cy="product-card"
      >
        <ProductCard :product="product" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'

export default {
  name: 'ProductList',
  components: { ProductCard },
  computed: {
    products() { return this.$store.getters['products/filteredProducts'] },
    loading() { return this.$store.state.products.loading },
    error() { return this.$store.state.products.error },
    category: {
      get() { return this.$store.state.filters.category },
      set(value) { this.$store.commit('filters/SET_CATEGORY', value) }
    },
    categories() {
      const products = this.$store.state.products.products
      return ['Todas', ...new Set(products.map(product => product.category))]
    }
  },
  created() {
    this.$store.dispatch('products/fetchProducts')
  }
}
</script>