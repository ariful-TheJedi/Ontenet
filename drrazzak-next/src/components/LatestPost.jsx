"use client";

import React from "react";
import BlogPostCard from "./sub-components/blog-card-latest";
import useLatestPosts from "./hooks/latest-three-posts";
import Link from "next/link";

export default function HomeLatestPosts() {
  const { posts, loading, error } = useLatestPosts();

  if (loading)
    return (
      <center className="py-10 text-gray-500">Loading latest posts...</center>
    );

  if (error)
    return (
      <center className="py-10 text-red-500">
        ⚠️ Failed to load posts: {error}
      </center>
    );

  if (!posts.length)
    return (
      <center className="py-10 text-gray-400">
        No recent posts available.
      </center>
    );

  return (
    <section className="home-latest-posts">
      <h2 className="section-title">Latest Posts</h2>

      <div className="home-latest-post-grid">
        {posts.map((post) => (
          <div className="home-latest-post-card" key={post.id}>
            <BlogPostCard
              slug={post.api_link}
              featured_image={post.featured_image}
              date={post.date}
              title={post.title}
              excerpt={post.excerpt}
            />
          </div>
        ))}
      </div>

      <div className="home-latest-post-readmore">
        <Link href="/blogs" className="home-latest-post-btn">
          Read More
        </Link>
      </div>
    </section>
  );
}
