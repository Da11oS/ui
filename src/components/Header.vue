<template>
  <v-toolbar
      color="green"
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
    <v-tabs
        centered
    >
      <v-tab @click="$router.push({ name: 'Home'})">
        <v-icon>mdi-home</v-icon>
      </v-tab>
      <v-tab @click="$router.push({ name: 'Catalog'})">
        Каталог
      </v-tab>
      <v-tab @click="$router.push({ name: 'Favorites'})"
             disabled="disable">
        Избранное
      </v-tab>
      <v-tab @click="$router.push({ name: 'Bascket'})"
             disabled="disable">
        Корзина
      </v-tab>
      <v-tab @click="$router.push({ name: 'Sign'})">
        <v-icon>mdi-account</v-icon>
      </v-tab>
    </v-tabs>
  </v-toolbar>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      searchText: "Search",
    }
  },
  computed: {
    disable() {
      return this.$root.UserId === 0;
    }
  }
}
</script>

<style scoped>

</style>