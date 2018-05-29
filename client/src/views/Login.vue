<template>
  <div class="register">
    <vk-grid class="uk-flex-center">
      <vk-card padding="large" class="uk-width-1-3@m">
        <vk-card-title>Login to your account</vk-card-title>
        <form @submit="login">
          <div uk-alert class="uk-alert uk-alert-danger" v-if="errors" v-html="errors"></div>
          <div class="uk-margin">
            <div class="uk-inline">
              <vk-icon icon="mail" class="uk-form-icon"></vk-icon>
              <input class="uk-input uk-form-width-large" type="email" placeholder="Your registered email address" v-model="email" required>
            </div>
          </div>
          <div class="uk-margin">
            <div class="uk-inline">
              <vk-icon icon="lock" class="uk-form-icon"></vk-icon>
              <input class="uk-input uk-form-width-large" type="password" placeholder="Your password" v-model="password" required>
            </div>
          </div>
          <vk-button type="primary" htmlType="submit">Login</vk-button>
        </form>
      </vk-card>
    </vk-grid>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      errors: null
    };
  },
  methods: {
    login() {
      const { email, password } = this;
      this.$store.dispatch("REQUEST_AUTH", { email, password }).then(() => {
        this.$router.push({ name: "dashboard" });
      });
    }
  }
};
</script>
