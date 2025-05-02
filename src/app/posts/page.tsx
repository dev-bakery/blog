import React from "react";
import CategoryPosts from "../components/CategoryPosts";
import { getAllPosts } from "../service/posts";

export default async function PostsPage() {
  const posts = await getAllPosts();
  //Set은 중복제거
  const categories = [...new Set(posts.map((post) => post.category))];
  return (
    <>
      <CategoryPosts posts={posts} categories={categories} />
    </>
  );
}
