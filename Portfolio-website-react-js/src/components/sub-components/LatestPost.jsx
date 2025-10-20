import React from "react";
import { BlogPostCard } from "../blogs";
import useLatestPosts from "../hooks/latest-three-posts";

const HomeLatestPosts = () => {

  const {posts, loading, error} = useLatestPosts();


  if (loading) return <center><p>Loading...</p></center>;
  if (error) return <center><p>Error: {error}</p></center>;


  //id,featured_image,date, tags, title, excerpt, api_link
  return (
    <section className="home-latest-posts">
      <h2>Latest Posts</h2>

      {/* Grid layout instead of slider */}
      <div className="home-latest-post-grid">
        {posts.map((post, index) => (
          <div className="home-latest-post-card" key={index}>
            <BlogPostCard {...post} />
          </div>
        ))}
      </div>

      <div className="home-latest-post-readmore">
        <button><a href="./blogs">Read More</a></button>
      </div>
    </section>
  );
};

export default HomeLatestPosts;
