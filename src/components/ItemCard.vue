<template>
  <v-card
      class="mx-auto"
      max-width="344"
      color="green"
  >
    <v-img
        :src=image
        height="200px"
    ></v-img>

    <v-card-title>
      {{ title }}
    </v-card-title>

    <v-card-subtitle>
      {{ subtitle }}
    </v-card-subtitle>
    <v-divider></v-divider>
    <v-card-actions>
      <v-card-subtitle>
        {{ price }} $
      </v-card-subtitle>
      <v-btn icon>
        <v-icon
            :color="isFavorite ? 'red' : 'white'"
            @click="isFavorite = !isFavorite"
        >mdi-heart
        </v-icon>
      </v-btn>
      <v-spacer></v-spacer>

      <v-btn
          icon
          @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ description }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>

export default {
  name: "ItemCard",
  data() {
    return {
      show: false,
    }
  },
  props: {

    name: {
      type: String,
      default: "item"
    },
    title: {
      type: String,
      default: "title"
    },
    subtitle: {
      type: String,
      default: "subtitle"
    },
    description: {
      type: String,
      default: "description"
    },
    isFavorite: {
      type: Boolean,
      default: false
    },
    image: {
      type: String,
      default: "../assets/logo.png",
    },
    price: {
      type: Number,
      default: 9999999
    }
  }
  // computed:{
  //   imageSrc(){
  //     return require(this.image);
  //   }
  // }
}
</script>

<style scoped>
.v-card {
  width: 100% !important;
}
</style>