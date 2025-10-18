import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

import useSinglePost from "./Hooks/single-post-data";
import Loading from "./sub-components/Loading";




const URL = process.env.NEXT_PUBLIC_API_URL;




function PostContent({ content }) {
  return (
      <div
        dangerouslySetInnerHTML={{ __html: content }}
      />
  );
}




const SinglePost = () => {

    //extract the slug
    const { id } = useParams();

   const { post, loading, error } = useSinglePost(id); 

  if (loading) return <Loading/> ;
  if (error) return <p className="loading-fullscreen">⚠️ {error}</p>;
 
  return (
    <div className="single-post">
      <div className="post-content">
        {/* Hero Image */}
        <div className="hero-image">
          <img
            src={post.featured_image}
            alt="Blog Post"
          />
        </div>

        {/* Post Inner */}
        <div className="post-inner">
          <div className="post-meta">
            <span className="category">{post.categories[0]}</span>
            <span className="date">
              <i className="far fa-calendar-alt"></i>{post.date}
            </span>
            <span className="read-time">
              <i className="far fa-clock"></i> 10 mins read
            </span>
          </div>

          <h1 className="post-title">
            {post.title}
          </h1>
{/* 
          <div className="excerpt">
            {post.content}
          </div> */}

          <div className="post-body">
              <PostContent content={post.content} />
          </div>

          {/* Author Short Bio */}
          <div className="author-card">
            <img
              src={URL+"/wp-content/uploads/2025/10/dr-muhammad-abdur-razzak-logo.png"}
              alt="Author dr-muhammad-abdur-razzak transplant nephrologist"
              className="author-image"
            />
            <div className="author-info">
              <a href="/about-me" className="author-name">
                Dr. Muhammad Abdur Razzak
              </a>
              <p className="author-title">
                Transplant Nephrologist
              </p>
              <p className="author-posts">
                <a href="/publications" alt="">12+ Publications</a>
              </p>
            </div>
          </div>

          {/* Social Sharing */}
          <div className="social-sharing">
            <a href="https://www.facebook.com/nephrology.bd/" className="facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a style={{background:"white"}} href="https://www.youtube.com/@dr.muhammadabdurrazzak9632" className="youtube">
              <i style={{color:"red"}} className="fab fa-youtube"></i>
            </a>
            <a href="https://www.linkedin.com/in/muhammad-abdur-razzak-mbbs-md-fasn-60a594128/" className="linkedin">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a style={{background:"black"}} href="https://x.com/abdurrazzak103" className="pinterest">
              <i className="fab fa-x-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
