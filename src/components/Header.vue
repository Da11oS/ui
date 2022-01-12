<template>
    <v-toolbar
        color="green"
        dark
        flat
    >
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-text-field
          class="mx-4"
          flat
          hide-details
          label="Search"
          solo-inverted
      ></v-text-field>
      <template v-slot:extension>
        <v-tabs
            v-model="tabs"
            centered
        >
          <v-tab @click = "$router.push({ name: 'Home'})">
            <v-icon>mdi-home</v-icon>
          </v-tab>
          <v-tab @click = "$router.push({ name: 'Catalog'})">
            Каталог
          </v-tab>
          <v-tab @click = "$router.push({ name: 'Favorites'})">
            Избранное
          </v-tab>
          <v-tab @click = "$router.push({ name: 'Bascket'})">
            Корзина
          </v-tab>
          <v-tab @click = "$router.push({ name: 'Sign'})">
              <v-icon>mdi-account</v-icon>
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>