<template>
  <div style="min-height: 800px">
    <v-row>
      <v-toolbar>
        <v-btn icon
               @click="searchText = textFieldValue">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-text-field
            class="mx-4"
            flat
            hide-details
            solo-inverted
            :value="searchText"
            v-model="searchText"
        ></v-text-field>
      </v-toolbar>
    </v-row>
    <v-row>
      <item-card
          v-for="item in filteredItems"
          :key="item"
          :title="item.Title"
          :subtitle="item.Subtitle"
          :description="item.Description"
          :image="item.ImageSrc"
          :price="item.Price"
      >
      </item-card>
    </v-row>
  </div>
</template>

<script>
import ItemCard from "@/components/ItemCard";
import {apiURl, catalog} from "@/Dictionaries";

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
    async getCatalogListAsync() {
      await fetch(apiURl + "/Catalog").then((response) => {
        return response.json();
      }).then((data) => {
            console.log("data: " + data);
            const obj = data.map(x => {
              return {
                ID: x.id,
                Title: x.title,
                Subtitle: x.subTitle,
                Description: x.descriptions,
                Price: x.price,
                Count: x.countP,
                ImageSrc: x.imageSrc
              };
            })
             this.items = obj;
          }
      );
    }
  },
  created() {
    console.log("created");
    this.getCatalogListAsync();
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