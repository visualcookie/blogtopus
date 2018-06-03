import PostService from "@/services/PostService.js";

const state = {
  posts: null
};

const getters = {
  hasPosts: state => state.posts
};

const actions = {
  setPosts: ({ commit }) => {
    return new Promise((resolve, reject) => {
      PostService.listPosts()
        .then(response => {
          const posts = response.data;

          if (posts.length > 0) {
            commit("setPosts", posts);
          }

          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};

const mutations = {
  setPosts: (state, posts) => {
    state.posts = posts;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
