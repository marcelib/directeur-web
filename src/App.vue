<template>
  <div id="app" class="app">
    <user-verifier/>
    <auth-layout v-if="isAuth"></auth-layout>
    <layout v-if="isAuthenticated"/>
  </div>
</template>

<script>
  import Layout from 'components/layout/Layout'
  import AuthLayout from 'components/layout/AuthLayout'
  import VuesticPreLoader from 'vuestic-components/vuestic-preloader/VuesticPreLoader.vue'
  import {mapGetters} from 'vuex'
  import UserVerifier from 'components/auth/UserVerifier'

  export default {
    name: 'app',
    components: {
      VuesticPreLoader,
      AuthLayout,
      Layout,
      UserVerifier
    },
    computed: {
      ...mapGetters([
        'userData',
      ]),
      isAuth () {
        return this.$route.path.match('auth')
      },
      isAuthenticated () {
        return this.userData && this.userData.email
      }
    }
  }
</script>

<style lang="scss">
  @import "sass/main";
  body {
    height: 100%;
    #app {
      height: 100%;
    }
  }
</style>
