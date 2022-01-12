<template>
<div class="itemList">
  <item-card
      v-for="n in count"
      :key="n"
      :title="'Title1'"
      :image="'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'"
  >
  </item-card>

</div>
</template>

<script>
import ItemCard from "@/components/ItemCard";
export default {
  name: "ItemList",
  components: {ItemCard},
  data(){
    return{
      count: 5
    };
  }
}
</script>

<style scoped>
.itemList {
  margin-top: 100px;
  margin-bottom: 100px;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
}
.v-card {
  width: 100% !important;
}
</style>