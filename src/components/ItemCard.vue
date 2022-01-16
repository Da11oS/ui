<template>
  <v-card
      class="mx-auto"
      max-width="344"
      color="blue"
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
      <v-btn icon v-if="$root.isLogIn" @click="clickFavorite">
        <v-icon
            color="isFavorite? 'red' : 'white'"
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

import {addFavorites, getFavoritesOfUserListAsync, removeFavorites} from "@/Service";

export default {
  name: "ItemCard",
  data() {
    return {
      show: false,
      favorite: false
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
    image: {
      type: String,
      default: "../assets/logo.png",
    },
    price: {
      type: Number,
      default: 9999999
    },
    id: {
      type: Number,
      default: 0
    }
  },
  methods: {
    clickFavorite() {
      if (this.isFavorite) {
        this.$emit('removefavorite', this.id);
        console.log('remove');
        removeFavorites(this.$root.userID, this.id).then(() => {
          if (this.$root.isLogIn)
            getFavoritesOfUserListAsync(this.$root.userID).then(data => {
              this.$root.favorites = data;
            });
        });
      } else {
        this.$emit('addfavorite', this.id);
        console.log('add');
        addFavorites(this.$root.userID, this.id).then(() => {
          if (this.$root.isLogIn)
            getFavoritesOfUserListAsync(this.$root.userID).then(data => {
              this.$root.favorites = data;
            });
        });
        this.favorite = this.$root.favorites.filter(x => x === this.id).length > 0;
      }
    },

  },
  computed: {
    imageSrc() {
      return require(this.image);
    },
    isFavorite() {
      if (this.$root.isLogIn)
        return this.$root.favorites.some(x => x === this.id);
      return false
    }
  }
}
</script>

<style scoped>
.v-card {
  width: 100% !important;
}
</style>