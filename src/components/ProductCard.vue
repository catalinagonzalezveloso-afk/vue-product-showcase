<template>
  <v-card class="h-100">
    <v-img :src="product.image" height="220" contain></v-img>
    <v-card-title>{{ product.title }}</v-card-title>
    <v-card-text>
      <div class="text-h6 mb-2">${{ product.price }}</div>
      <div>{{ product.category }}</div>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="toggleFavorite" variant="text">
        {{ isFavorite ? 'Quitar favorito' : 'Favorito' }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'ProductCard',
  props: { product: { type: Object, required: true } },
  computed: {
    isFavorite() {
      return this.$store.state.favorites.items.some(item => item.id === this.product.id)
    }
  },
  methods: {
    toggleFavorite() {
      this.$store.commit('favorites/TOGGLE_FAVORITE', this.product)
    }
  }
}
</script>