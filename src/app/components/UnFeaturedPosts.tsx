import React from "react";
import { getUnFeaturedPosts } from "../service/posts";
import MultiCarousel from "./MultiCarousel";
import PostCard from "./PostCard";

export default async function UnFeaturedPosts() {
  const posts = await getUnFeaturedPosts();

  return (
    <div className='my-10'>
      <h2 className='text-2xl font-bold my-2'>You May Like</h2>
      <MultiCarousel>
        {posts.map((post) => (
          <PostCard post={post} key={post.path} />
        ))}
      </MultiCarousel>
    </div>
  );
}
