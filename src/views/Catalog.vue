<template>
  <div class="Catalog">
    <item-list/>
  </div>
</template>

<script>
import ItemList from "@/components/ItemList";

export default {
  name: "Catalog",
  components: {
    ItemList
  },
  props: {
    searchText: String
  },
}
</script>

<style scoped>

</style>