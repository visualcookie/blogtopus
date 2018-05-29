<template>
  <div class="register">
    <vk-grid class="uk-flex-center">
      <vk-card padding="large" class="uk-width-1-3@m">
        <vk-card-title>Register for an account</vk-card-title>
        <form @submit="register">
          <div uk-alert class="uk-alert uk-alert-danger" v-if="errors" v-html="errors"></div>
          <div class="uk-margin">
            <div class="uk-inline">
              <vk-icon icon="user" class="uk-form-icon"></vk-icon>
              <input class="uk-input uk-form-width-large" type="text" placeholder="Enter a username" v-model="username" required>
            </div>
          </div>
          <div class="uk-margin">
            <div class="uk-inline">
              <vk-icon icon="mail" class="uk-form-icon"></vk-icon>
              <input class="uk-input uk-form-width-large" type="email" placeholder="Enter an email address" v-model="email" required>
            </div>
          </div>
          <div class="uk-margin">
            <div class="uk-inline">
              <vk-icon icon="lock" class="uk-form-icon"></vk-icon>
              <input class="uk-input uk-form-width-large" type="password" placeholder="Enter a strong password" v-model="password" required>
            </div>
          </div>
          <vk-button type="primary" htmlType="submit">Register now</vk-button>
        </form>
      </vk-card>
    </vk-grid>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";

export default {
  name: "register",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      errors: null
    };
  },
  methods: {
    async register() {
      try {
        await AuthenticationService.register({
          username: this.username,
          email: this.email,
          password: this.password
        });
        this.$router.push({ name: "login" });
      } catch (error) {
        this.errors = error.response.data.error;
      }
    }
  }
};
</script>
