<template>
  <v-card
      class="mx-auto"
      max-width="344"
      color="green"
  >
    <v-img
        :src= image
        height="200px"
    ></v-img>

    <v-card-title>
      {{title}}
    </v-card-title>

    <v-card-subtitle>
      {{ subtitle }}
    </v-card-subtitle>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn
          color="orange lighten-2"
          text
      >
        Explore
      </v-btn>
      <v-btn icon>
        <v-icon
            :color = "isFavorite ? 'red' : 'white'"
            @click = "isFavorite = !isFavorite"
        >mdi-heart</v-icon>
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
      description:{
        type: String,
        default: "description"
      },
      isFavorite: {
        type: Boolean,
        description: false
      },
      image: {
        type: String,
        description: "../assets/logo.png",
      },
      show: {
        type: Boolean,
        description: false
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

</style>