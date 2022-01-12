<template>
    <v-toolbar>
      <v-btn icon>
        <v-img
            src ="../assets/logo.png"
            width="50px"
            height="50px"
            @click="$router.push({ name: 'Home'})"
        ></v-img>
      </v-btn>

      <v-text-field
          hide-details
          single-line
      ></v-text-field>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
          color="accent"
          elevation="2"
          @click = "$router.push({ name: 'Catalog'})"
      >Каталог</v-btn>
      <v-btn
          color="accent"
          elevation="2"
          @click = "$router.push({ name: 'Favorites'})"
      >Избранное</v-btn>
      <v-btn
          color="accent"
          elevation="2"
          @click = "$router.push({ name: 'Bascket'})"
      >Корзина</v-btn>
      <v-btn
          icon
          @click = "$router.push({ name: 'Sign'})"
      >
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-toolbar>

</template>

<script>
  export default {
    name: 'ToolBar',
    data: () => ({}),
  }
</script>
<style scoped>

</style>