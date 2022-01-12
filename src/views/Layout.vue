<template>
<div class="layout">
  <Header></Header>
    <router-view/>
  <custom-footer/>
</div>
</template>

<script>
import Header from "@/components/Header";
import CustomFooter from "@/components/Footer";

export default {
  name: "Layout",
  components: { Header, CustomFooter }
}
</script>

<style scoped>
.layout{
  flex-direction: column;
}
</style>