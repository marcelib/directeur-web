<template>
  <div class="login">
    <h2>{{'auth.welcome' | translate}}</h2>
    <a href="/api/google/login">
      <div class="d-flex flex-column flex-lg-row align-items-center justify-content-center down-container">
        <button class="btn btn-primary" type="submit">
          {{'auth.loginByGoogle' | translate}}
        </button>
      </div>
    </a>
  </div>
</template>

<script>

  export default {
    name: 'login'
  }
</script>

<style lang="scss">
  @import '../../../sass/variables';
  @import '~bootstrap/scss/mixins/breakpoints';
  @import "~bootstrap/scss/functions";
  @import '~bootstrap/scss/variables';
  .login {
    @include media-breakpoint-down(md) {
      width: 100%;
      padding-right: 2rem;
      padding-left: 2rem;
      .down-container {
        .link {
          margin-top: 2rem;
        }
      }
    }

    h2 {
      text-align: center;
    }
    width: 21.375rem;

    .down-container {
      margin-top: 3.125rem;
    }
  }
</style>
