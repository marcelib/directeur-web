<template>
</template>
<script>
  import store from 'vuex-store'

  export default {
    name: 'user-verifier',
    props: {
      loginPage: false,
    },
    created () {
      store.dispatch('fetchUserData', this.loginPage)
    },
  }
</script>
