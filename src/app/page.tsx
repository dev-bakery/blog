import React from "react";
import Hero from "./components/Hero";
import FeaturedPosts from "./components/FeaturedPosts";
import UnFeaturedPosts from "./components/UnFeaturedPosts";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedPosts />
      <UnFeaturedPosts />
    </>
  );
}
