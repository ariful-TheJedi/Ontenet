// src/components/Hooks/useLatestPosts.jsx
import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_DOMAIN+"/wp-json/wp/v2/posts?_embed&per_page=3";


export default function useLatestPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Failed to fetch posts");
        const data = await res.json();

        const formatted = data.map((post) => ({
          id: post.id,
          title: post.title.rendered,
          excerpt: post.excerpt.rendered,
          date: new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
          featured_image:
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null,
          tags: post.tags || [],
          api_link: `/post/${post.id}`, // or slug: `/post/${post.slug}`
        }));

        setPosts(formatted);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
}
