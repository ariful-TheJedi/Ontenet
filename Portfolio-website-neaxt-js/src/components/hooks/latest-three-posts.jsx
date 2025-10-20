"use client";

import { useEffect, useState } from "react";

export default function useLatestPosts() {
  const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/posts?_embed&per_page=3`;

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(API_URL, { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch posts");

        const data = await res.json();

        // 🧩 Map and format each post properly
        const formatted = data.map((post) => {
  return {
    id: post.id,
    slug: post.slug || "", // fallback empty if missing
    api_link: `/post/${post.slug || ""}`,
    title: post.title?.rendered || "",
    excerpt: post.excerpt?.rendered || "",
    date: new Date(post.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }),
    featured_image:
      post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
  };
});


        setPosts(formatted);
      } catch (err) {
        console.error("❌ Error fetching posts:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [API_URL]);

  return { posts, loading, error };
}
