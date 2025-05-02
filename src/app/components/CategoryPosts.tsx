"use client";
import React, { useState } from "react";
import { Post } from "../service/posts";
import PostsGrid from "./PostsGrid";
import CategoryList from "./CategoryList";

type Props = { posts: Post[]; categories: string[] };
const ALL_POSTS = "All Posts";

export default function CategoryPosts({ posts, categories }: Props) {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filtered = selected === ALL_POSTS ? posts : posts.filter((post) => post.category === selected);
  return (
    <>
      <div>
        <CategoryList categories={[ALL_POSTS, ...categories]} selected={selected} onClick={(selected) => setSelected(selected)} />
        <PostsGrid posts={filtered} />
      </div>
    </>
  );
}
