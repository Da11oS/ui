<template>
  <div class = "sign-out">
    <v-card-text>
      <v-text-field
          label="Email"
          value="john@vuetifyjs.com"
      ></v-text-field>
      <span class="text-caption grey--text text--darken-1">
            This is the email you will use to login to your Vuetify account
          </span>
      <v-text-field
          label="Password"
          type="password"
      ></v-text-field>
      <v-text-field
          label="Confirm Password"
          type="password"
      ></v-text-field>
      <span class="text-caption grey--text text--darken-1">
            Please enter a password for your account
          </span>
    </v-card-text>
  </div>
</template>

<script>
export default {
  name: "SignOut"
}
</script>

<style scoped>

</style>