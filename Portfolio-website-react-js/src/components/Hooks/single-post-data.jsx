import { useState, useEffect } from "react";

const API_URL = import.meta.env.VITE_API_DOMAIN;


export default function useSinglePost(id) {
  const [post, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch(API_URL+"/wp-json/custom/v1/post/"+id);
        if (!res.ok) throw new Error("Failed to fetch posts");
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return { post, loading, error };
}
