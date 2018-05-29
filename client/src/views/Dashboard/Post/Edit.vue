<template>
  <div class="post-create">
    <h1>Edit Post</h1>
    <form class="uk-form-stacked" @submit="edit">
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
      <vk-button type="primary" htmlType="submit">Change Post</vk-button>
    </form>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import PostService from "@/services/PostService";

export default {
  name: "postedit",
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
  beforeMount() {
    this.post();
  },
  methods: {
    async post() {
      const response = await PostService.getPost(this.$route.params.id);
      const { title, body } = response.data;
      this.title = title;
      this.content = body;
    },
    async edit() {}
  }
};
</script>
