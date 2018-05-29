<template>
  <div class="post-create">
    <h1>Create Post</h1>
    <form class="uk-form-stacked" @submit="create">
      <div class="uk-margin">
        <label class="uk-form-label" for="title">Title</label>
        <div class="uk-form-controls">
          <input class="uk-input" id="title" type="text" v-model="title" placeholder="Lorem ipsum">
        </div>
      </div>
      <div class="uk-margin">
        <label class="uk-form-label" for="content">Content</label>
        <div class="uk-form-controls">
          <vue-editor id="content" v-model="content" placeholder="Lorem ipsum dolor sit amet..."></vue-editor>
        </div>
      </div>
      <vk-button type="primary" htmlType="submit">Publish Post</vk-button>
    </form>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import PostService from "@/services/PostService";

export default {
  name: "postcreate",
  components: {
    VueEditor
  },
  data() {
    return {
      title: null,
      content: null,
      errors: null
    };
  },
  methods: {
    async create() {
      try {
        await PostService.createPost({
          title: this.title,
          body: this.content
        });

        this.$router.push({ name: "dashboard.post" });
      } catch (error) {
        console.log(error);
        this.errors = error.response.data.error;
      }
    }
  }
};
</script>
