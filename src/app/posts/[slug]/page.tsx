import AdjacentPostCard from "@/app/components/AdjacentPostCard";
import PostContent from "@/app/components/PostContent";
import { getPostData } from "@/app/service/posts";
import Image from "next/image";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};
export default async function PostPage({ params }: Props) {
  const { slug } = params;
  const post = await getPostData(slug);
  const { title, path, next, prev } = post;

  return (
    <div className='rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4'>
      <Image className='w-full h-1/5 max-h-[500px]' src={`/images/posts/${path}.png`} width={760} height={420} alt={title} />
      <PostContent post={post} />
      <div className='flex shadow-md'>
        {prev && <AdjacentPostCard post={prev} type='prev' />}
        {next && <AdjacentPostCard post={next} type='next' />}
      </div>
    </div>
  );
}
