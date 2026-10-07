<template>
  <v-app :theme="darkMode ? 'dark' : 'light'">
    <Header :dark-mode="darkMode" @toggle-theme="darkMode = !darkMode" />
    <v-main>
      <v-container class="py-6">
        <h1 class="text-h4 mb-6">Catálogo de productos</h1>
        <ProductList />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import ProductList from './components/ProductList.vue'

export default {
  name: 'App',
  components: { Header, Footer, ProductList },
  data() {
    return { darkMode: false }
  }
}
</script>