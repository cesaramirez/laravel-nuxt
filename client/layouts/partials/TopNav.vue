<template>
  <!-- START NAV -->
  <nav class="navbar is-white">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item brand-text" href="../">
          Acme
        </a>
        <div class="navbar-burger burger" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navMenu" class="navbar-menu">
        <div class="navbar-end">
          <template v-if="!authenticated">
            <nuxt-link class="navbar-item" :to="{ name: 'auth-login' }">
              Sign In
            </nuxt-link>
            <a class="navbar-item">
              Sign Up
            </a>
          </template>
          <template v-else>
            <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link" v-text="user.name" />
                    <div class="navbar-dropdown is-boxed">
                        <a class="navbar-item">
                            Dashboard
                        </a>
                        <a class="navbar-item">
                            Profile
                        </a>
                        <a class="navbar-item">
                            Settings
                        </a>
                        <hr class="navbar-divider">
                        <a @click.prevent="logout" class="navbar-item">
                            Logout
                        </a>
                    </div>
                </div>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  methods: {
    logout() {
      this.$auth.logout();
    }
  }
};
</script>
