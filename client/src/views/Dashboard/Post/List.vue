<template>
  <div class="post-list">
    <h1>Posts</h1>
    <div class="uk-alert uk-alert-primary" uk-alert v-if="posts.length === 0">
      <p>Nothing to display here, since there are no Posts yet.</p>
    </div>
    <vk-table responsive :data="posts" v-if="posts.length >= 1">
      <vk-table-column title="Title" cell="title" expanded truncated></vk-table-column>
      <vk-table-column title="Date" cell="created_at">
        <template slot-scope="{ cell }">{{ cell | formatDate }}</template>
      </vk-table-column>
      <vk-table-column title="Controls" cell="id">
        <template slot-scope="{ cell }">
          <form @submit.prevent>
            <vk-button type="primary" size="small" @click="editPost(cell)">Edit</vk-button>
            <vk-button type="danger" size="small" htmlType="submit">Delete</vk-button>
          </form>
        </template>
      </vk-table-column>
    </vk-table>
    <router-link :to="{ name: 'dashboard.post.create' }" class="uk-button uk-button-primary">Create Post</router-link>
  </div>
</template>

<script>
import PostService from "@/services/PostService";

export default {
  name: "postlist",
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
    },
    editPost(id) {
      this.$router.push({ name: "dashboard.post.edit", params: { id } });
    }
  }
};
</script>
