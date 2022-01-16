<template>
  <div>
    <v-card
        class="mx-auto"
        max-width="1000"
        min-width="500"
        align="center"
    >
      <v-card-title class="text-h6 font-weight-regular justify-space-between">
        <span>{{ currentTitle }}</span>
      </v-card-title>

      <v-window v-model="step">
        <v-window-item :value="1">
          <v-card-text>
            <v-text-field
                label="Email"
                v-model="mail"
            ></v-text-field>
            <v-text-field
                label="Password"
                type="password"
                v-model="password"
            ></v-text-field>
          </v-card-text>
        </v-window-item>
        <v-window-item :value="2">
          <div class="sign-up">
            <v-card-text>
              <v-text-field
                  label="Email"
                  value="john@vuetifyjs.com"
                  v-model="mail"
              ></v-text-field>
              <span class="text-caption grey--text text--darken-1">
            This is the email you will use to login to your Vuetify account
          </span>
              <v-text-field
                  label="Password"
                  type="password"
                  v-model="password"
              ></v-text-field>
              <v-text-field
                  label="Confirm Password"
                  type="password"
                  v-model="conFirmPassword"
              ></v-text-field>
              <span class="text-caption grey--text text--darken-1">
            Please enter a password for your account
          </span>
            </v-card-text>
          </div>
        </v-window-item>

      </v-window>
      <v-btn
          color="primary"
          depressed
          justify="center"
          @click="step === 1 ? signin() : signup()"
      >
        {{ step === 1 ? 'Sign in' : 'sign up' }}
      </v-btn>
      <v-divider></v-divider>

      <v-card-actions class="justify-center">
        <v-btn
            v-if="step > 1"
            text
            @click="step = 1"
        >
          Go to sign in
        </v-btn>
        <div v-if="step != 2">

          <v-btn
              depressed
              @click="step = 2"
          >
            Go to sign up
          </v-btn>
        </div>
      </v-card-actions>
    </v-card>
    <v-snackbar
        v-model="snackbar"
        :timeout="5000"
    >
      {{ snackbarText }}

      <template v-slot:action="{ attrs }">
        <v-btn
            color="blue"
            text
            v-bind="attrs"
            @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>

import {apiURl} from "@/Service";

export default {
  name: "Sign",
  components: {},
  data: () => ({
    step: 1,
    mail: "john@vuetifyjs.com",
    password: "",
    conFirmPassword: "",
    snackbar: false,
    snackbarText: "",
  }),

  computed: {
    currentTitle() {
      switch (this.step) {
        case 1:
          return 'Sign-in'
        case 2:
          return 'Sign-up'
        default:
          return 'Account created'
      }
    },
    isValidMail() {
      let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
      if (regex.test(this.mail)) {
        return true;
      }

      return false;
    }
  },
  methods: {
    async signin() {
      if (!this.isValidMail) {
        this.snackbarText = "Invalid mail!";
        this.snackbar = true;
        return;
      }
      await fetch(apiURl + '/Users/signin?mail=' + this.mail + '&password=' + this.password)
          .then(response => response.json())
          .then(data => {
            if (data === 0) {
              this.snackbarText = "Invalid mail or password!";
              this.snackbar = true;
              return;
            } else {
              this.$root.userID = data;
              this.$router.push({ name: 'Catalog'});
            }
          });
    },
    signup() {
      if (this.password.length <= 0) {
        this.snackbarText = "Не не указан пароль!";
        this.snackbar = true;
        return;
      } else if (this.mail.length <= 0) {
        this.snackbarText = "Не не указана почта!";
        this.snackbar = true;
        return;
      } else if (this.password != this.conFirmPassword) {
        this.snackbarText = "Не верно введен повторный пароль!";
        this.snackbar = true;
        return;
      }
      const mail = this.mail;
      const password = this.conFirmPassword;
      fetch(apiURl + '/Users/?mail=' + mail + '&password=' + password, {method: "POST"}).then(
          response => {
            if (response.status === 400) {
              this.snackbarText = "Current user have!";
              this.snackbar = true;
              return;
            }
            this.snackbarText = "User created success!";
            this.snackbar = true;
            this.step = 1;
            return;
          }
      );
    }
  }
}

</script>
<style>
.v-card {
  margin-top: 100px;
  margin-bottom: 100px;
}

.v-parallax {
  min-height: 100vh;
}
</style>