<template>
  <div class="post">
    <vk-card>
      <div slot="header">
        <vk-grid gutter="small" class="uk-flex-middle">
          <div class="uk-width-expand">
            <vk-card-title class="uk-margin-remove-bottom">{{ title }}</vk-card-title>
            <p class="uk-text-meta uk-margin-remove-top"><time :datetime="publishDate">{{ publishDate | formatDate }}</time></p>
          </div>
        </vk-grid>
      </div>
      <div v-html="content"></div>
    </vk-card>
  </div>
</template>

<script>
import PostService from "@/services/PostService";

export default {
  name: "home",
  data() {
    return {
      title: null,
      content: null,
      publishDate: null,
      errors: null
    };
  },
  beforeMount() {
    this.post();
  },
  methods: {
    async post() {
      const response = await PostService.getPost(this.$route.params.id);
      const { title, body, created_at } = response.data;
      this.title = title;
      this.content = body;
      this.publishDate = created_at;
    }
  }
};
</script>
