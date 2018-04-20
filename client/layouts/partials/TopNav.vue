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
            <a class="navbar-item" href="">
              Sign In
            </a>
            <nuxt-link class="navbar-item" :to="{ name: 'auth-login' }">
              Sign Up
            </nuxt-link>
          </template>
          <template v-else>
            <a class="navbar-item" href="">
              {{ user.name }}
            </a>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>
