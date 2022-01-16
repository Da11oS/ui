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
      <v-tab @click="routeToFavorites">
        Избранное
      </v-tab>
      <v-tab @click="routeToBascket"
      >
        Корзина
      </v-tab>
      <v-tab v-if="!this.$root.isLogIn" @click="$router.push({ name: 'Sign'})">
        <v-icon>mdi-account</v-icon>
      </v-tab>
      <v-tab v-else @click = "$root.userID = 0">   <v-icon>mdi-exit-run</v-icon></v-tab>
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
    enable() {
      return this.$root.UserId != 0;
    }
  },
  methods: {
    routeToBascket() {
      if (this.$root.isLogIn)
        this.$router.push({name: 'Bascket'});
    },
    routeToFavorites() {
      if (this.$root.isLogIn)
        this.$router.push({name: 'Favorites'});
    }
  }
}

</script>

<style scoped>

</style>