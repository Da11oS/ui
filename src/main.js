import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
    router,
    vuetify,
    data() {
        return {
            userID: 0,
            favorites: [0]
        }
    },
    computed: {
        isLogIn() {
            return this.userID != 0
        }
    },
    render: h => h(App)
}).$mount('#app')
