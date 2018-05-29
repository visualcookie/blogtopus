<template>
  <div class="home">
    <vk-grid class="uk-flex-center">
      <div class="uk-width-1-2@m" v-for="post in posts" v-bind:key="post.id">
        <vk-card>
          <div slot="header">
            <vk-grid gutter="small" class="uk-flex-middle">
              <div class="uk-width-expand">
                <vk-card-title class="uk-margin-remove-bottom">{{ post.title }}</vk-card-title>
                <p class="uk-text-meta uk-margin-remove-top"><time :datetime="post.created_at">{{ post.created_at | formatDate }}</time></p>
              </div>
            </vk-grid>
          </div>
          <div>
            <p class="uk-margin-remove-bottom">{{ post.description }}</p>
          </div>
          <div slot="footer">
            <router-link :to="{ name: 'post', params: { id: post.id } }">Read More</router-link>
          </div>
        </vk-card>
      </div>
    </vk-grid>
  </div>
</template>

<script>
import PostService from "@/services/PostService";

export default {
  name: "home",
  data() {
    return {
      posts: null,
      errors: null
    };
  },
  beforeMount() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      try {
        const getPosts = await PostService.listPosts();
        this.posts = getPosts.data;
      } catch (error) {
        console.log(error);
        this.errors = error.response.data.error;
      }
    }
  }
};
</script>
