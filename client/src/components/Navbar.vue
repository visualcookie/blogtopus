<template>
  <div class="uk-background-primary uk-margin">
    <vk-navbar class="uk-light uk-navbar-transparent">
      <vk-navbar-nav>
        <vk-navbar-logo>
          <router-link :to="{ name: 'home' }" active-class="uk-active">Blogtopus</router-link>
        </vk-navbar-logo>
      </vk-navbar-nav>
      <vk-navbar-nav slot="right" v-if="$store.getters.hasToken">
        <router-link tag="li" :to="{ name: 'dashboard' }" active-class="uk-active">
          <a>Dashboard</a>
        </router-link>
        <vk-navbar-item>
          <form @submit="logout">
            <vk-button type="danger" htmlType="submit">Logout</vk-button>
          </form>
        </vk-navbar-item>
      </vk-navbar-nav>
      <vk-navbar-nav slot="right" v-if="!$store.getters.hasToken">
        <router-link tag="li" :to="{ name: 'login' }" active-class="uk-active">
          <a>Login</a>
        </router-link>
        <router-link tag="li" :to="{ name: 'register' }" active-class="uk-active">
          <a>Register</a>
        </router-link>
      </vk-navbar-nav>
    </vk-navbar>
  </div>
</template>

<script>
export default {
  name: "navbar",
  methods: {
    logout() {
      this.$store.dispatch("AUTH_LOGOUT").then(() => {
        this.$router.push({ name: "login" });
      });
    }
  }
};
</script>
