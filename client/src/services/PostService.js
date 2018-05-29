import Api from "@/services/Api";

export default {
  listPosts() {
    return Api().get("post");
  },
  getPost(id) {
    return Api().get(`post/${id}`);
  },
  createPost(body) {
    return Api().post("post", body);
  }
};
