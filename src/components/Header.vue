<template>
  <v-app-bar>
    <v-toolbar-title>Vue Product Showcase</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn @click="$emit('toggle-theme')">
      {{ darkMode ? 'Tema claro' : 'Tema oscuro' }}
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header',
  props: { darkMode: { type: Boolean, default: false } },
  emits: ['toggle-theme']
}
</script>