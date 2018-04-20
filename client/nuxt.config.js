module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "client",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    link: [
      {
        type: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.0.10/css/all.css",
        integrity:
          "sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg",
        crossorigin: "anonymous"
      }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },

  modules: ["@nuxtjs/axios", "@nuxtjs/auth"],

  plugins: ["./plugins/mixins/user"],
  axios: {
    baseURL: "http://laravel.nuxt.test/api"
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "auth/login",
            method: "post",
            propertyName: "meta.token"
          },
          user: {
            url: "auth/me",
            method: "get",
            propertyName: "data"
          },
          logout: {}
        }
      }
    }
  },

  css: ["bulma", "@/assets/sass/app.scss"],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
