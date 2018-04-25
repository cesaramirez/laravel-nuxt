<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-grey">Login</h3>
           <div class="box">
            <form @submit.prevent="submit">
              <div class="field">
                <div class="control">
                  <input
                    class="input is-large"
                    :class="{ 'is-danger' : errors.email }"
                    type="email"
                    placeholder="Your Email"
                    autofocus
                    v-model="form.email">
                    <p class="help is-danger" v-if="errors.email" v-text="errors.email[0]"></p>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input
                    class="input is-large"
                    :class="{ 'is-danger' : errors.password }"
                    type="password"
                    placeholder="Your Password"
                    v-model="form.password">
                    <p class="help is-danger" v-if="errors.password" v-text="errors.password[0]"></p>
                </div>
              </div>
              <button class="button is-block is-info is-large is-fullwidth">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async submit() {
      await this.$auth.login({
        data: this.form
      });

      this.$router.replace({
        path: "/"
      });
    }
  }
};
</script>
