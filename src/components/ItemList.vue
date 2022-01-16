<template>
  <div style="min-height: 800px">
    <v-row>
      <v-toolbar color="blue">
        <v-btn icon
               @click="searchText = textFieldValue">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-text-field
            class="mx-4"
            flat
            hide-details
            solo-inverted
            color="white"
            :value="searchText"
            v-model="searchText"
        ></v-text-field>
      </v-toolbar>
    </v-row>
    <v-row>
      <item-card
          @addfavorite="console.log('add')"
          @removefavorite="console.log('remove')"
          v-for="(item,index) in filteredItems"
          :key="index"
          :title="item.Title"
          :subtitle="item.Subtitle"
          :description="item.Description"
          :image="item.ImageSrc"
          :price="item.Price"
          :id="item.ID"
      >
      </item-card>
    </v-row>
  </div>
</template>

<script>
import ItemCard from "@/components/ItemCard";
import {catalog} from "@/Dictionaries";
import {getBascketListAsync, getCatalogListAsync, getFavoritesListAsync, getFavoritesOfUserListAsync} from "@/Service";

export default {
  name: "ItemList",
  components: {ItemCard},
  data() {
    return {
      items: catalog,
      count: 5,
      searchText: "",
    };
  },
  computed: {
    filteredItems() {
      return this.searchText.length > 0 ?
          this.items.filter(x =>
              String((x.Title)).includes(this.searchText) ||
              String((x.Subtitle)).includes(this.searchText) ||
              String((x.Description)).includes(this.searchText)
          )
          : this.items;
    }
  },
  methods: {
    SetItems() {
      switch (this.$router.currentRoute.name) {
        case "Catalog":
          if(this.$root.isLogIn)
            getFavoritesOfUserListAsync(this.$root.userID).then(data => {this.$root.favorites = data});
          getCatalogListAsync().then(data => this.items = data);
          break;
        case "Favorites":
          if(this.$root.isLogIn)
            getFavoritesOfUserListAsync(this.$root.userID).then(data => {this.$root.favorites = data});
          getFavoritesListAsync(this.$root.userID).then(data => {this.items = data});
          break;
        case "Basket":
          getBascketListAsync(this.$root.userID).then(data => this.items = data);
          break;
      }
    }
  },
  created() {
    this.SetItems();
  }
}
</script>

<style scoped>
.itemList {
  margin-top: 100px;
  margin-bottom: 200px;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
}

.v-card {
  width: 100% !important;
}
</style>