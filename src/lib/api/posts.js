import client from "lib/api/client";

// 記事を全件取得
export function getAllPosts() {
  return client.get("/posts");
}

// IDから個別の記事を取得
export function getPostById(id) {
  return client.get(`/posts/${id}`);
}

// ページ番号によって記事を取得
export function getPostsByPageNumber(pageNumber, limit) {
  return client.get(`posts?offset=${(pageNumber - 1) * limit}&limit=${limit}`);
}

// 最新の記事のみを取得
export function getLatestPosts(limit) {
  return client.get(`/posts?limit=${limit}`);
}
