<template>
  <div class="home">
    <vk-grid class="uk-flex-center">
      <p class="uk-text-muted" v-if="!posts">There are no posts yet.</p>
      <div class="uk-width-1-2@m" v-for="post in posts" v-bind:key="post.id" v-if="posts">
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
import { mapGetters } from "vuex";

export default {
  name: "home",
  computed: {
    ...mapGetters({
      posts: "hasPosts"
    })
  },
  methods: {
    listPosts() {
      this.$store.dispatch("setPosts");
    }
  },
  beforeMount() {
    this.listPosts();
  }
};
</script>
