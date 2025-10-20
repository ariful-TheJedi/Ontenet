import React from "react";
import usePosts from "./Hooks/all-posts-data";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import slugify from "./Hooks/slugify";
import Loader from "./sub-components/Loading";


const API_URL = import.meta.env.VITE_API_DOMAIN;


// Card Component
export const BlogPostCard = ({id,featured_image,date, tags, title, excerpt, api_link }) => {

  return (
    <div className="blog-post-card">
      <img src={featured_image} alt={title} className="blog-post-card-image" />
      <div className="blog-post-card-content">
        <div className="blog-post-card-meta">Published: {date}</div>
        <div className="blog-post-card-tags">
          {tags.map((tag, index) => (
            <span key={index} className="blog-post-card-tag">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="blog-post-card-title">{title}</h3>
        {/* <p className="blog-post-card-excerpt">{excerpt}</p> */}
        <p dangerouslySetInnerHTML={{ __html: excerpt }} />
        <li className="blog-post-card-button">
            <Link to={`/post/${slugify(title)}`}>Read More</Link>
        </li>
      </div>
    </div>
  );
};

// Main Component
const Blogs = ({title}) => {

   const { posts, loading, error } = usePosts(); 

  if (loading) return <Loader/>;
  if (error) return <p className="loading-fullscreen">⚠️ {error}</p>;

  // const categories = [
  //   {
  //     name: "Technology",
  //     posts: [
  //       {
  //         image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  //         date: "Sep 20, 2025",
  //         tags: ["AI", "Innovation"],
  //         title: "Artificial Intelligence in 2025",
  //         excerpt:
  //           "Explore how artificial intelligence is shaping industries, improving efficiency, and creating new opportunities for businesses worldwide."
  //       },
  //       {
  //         image: "https://via.placeholder.com/400x250/0984E3/fff?text=Web+Dev",
  //         date: "Sep 15, 2025",
  //         tags: ["Web", "Frontend"],
  //         title: "Modern Web Development Frameworks",
  //         excerpt:
  //           "A look at the most popular frameworks powering today’s web apps, from React and Vue to emerging technologies in frontend development."
  //       },
  //       {
  //         image: "https://via.placeholder.com/400x250/00CEC9/fff?text=Gadgets",
  //         date: "Sep 10, 2025",
  //         tags: ["Tech", "Gadgets"],
  //         title: "Top 10 Gadgets You Need This Year",
  //         excerpt:
  //           "From smart wearables to home assistants, here are the must-have gadgets that can make your daily life smarter and more fun."
  //       }
  //     ]
  //   },
  //   {
  //     name: "Health & Wellness",
  //     posts: [
  //       {
  //         image: "https://via.placeholder.com/400x250/00B894/fff?text=Fitness",
  //         date: "Sep 18, 2025",
  //         tags: ["Fitness", "Daily Routine"],
  //         title: "5 Exercises to Boost Energy",
  //         excerpt:
  //           "Quick and effective exercises you can add to your daily routine to stay active, energized, and healthy without hitting the gym."
  //       },
  //       {
  //         image: "https://via.placeholder.com/400x250/55EFC4/000?text=Nutrition",
  //         date: "Sep 12, 2025",
  //         tags: ["Nutrition", "Diet"],
  //         title: "Healthy Eating on a Budget",
  //         excerpt:
  //           "Learn how to plan nutritious meals and snacks that keep you fit and energized without overspending on groceries."
  //       },
  //       {
  //         image: "https://via.placeholder.com/400x250/81ECEC/000?text=Mindfulness",
  //         date: "Sep 8, 2025",
  //         tags: ["Mental Health", "Relaxation"],
  //         title: "Mindfulness Techniques for Stress",
  //         excerpt:
  //           "Discover simple mindfulness techniques that reduce stress, improve focus, and help you maintain balance in daily life."
  //       }
  //     ]
  //   },
  //   {
  //     name: "Travel",
  //     posts: [
  //       {
  //         image: "https://via.placeholder.com/400x250/FD79A8/fff?text=Beach",
  //         date: "Sep 14, 2025",
  //         tags: ["Adventure", "Beach"],
  //         title: "Top 5 Beaches to Visit",
  //         excerpt:
  //           "From crystal-clear waters to golden sands, here are five breathtaking beaches you must add to your travel bucket list."
  //       },
  //       {
  //         image: "https://via.placeholder.com/400x250/FAB1A0/000?text=Mountains",
  //         date: "Sep 7, 2025",
  //         tags: ["Hiking", "Nature"],
  //         title: "Exploring Mountain Trails",
  //         excerpt:
  //           "Take a journey through the most scenic mountain trails that offer stunning views, fresh air, and peaceful hikes."
  //       },
  //       {
  //         image: "https://via.placeholder.com/400x250/FFEAA7/000?text=Cityscape",
  //         date: "Sep 1, 2025",
  //         tags: ["Urban", "Culture"],
  //         title: "Discovering Hidden Cities",
  //         excerpt:
  //           "Uncover lesser-known cities full of culture, history, and unique experiences waiting to be explored by curious travelers."
  //       }
  //     ]
  //   }
  // ];


  return (
    <div className="blogs-container">
      {posts.map((category, i) => (
        <section className="blogs" key={i}>
          <h1 className="blogs-category" dangerouslySetInnerHTML={{ __html: category.category }} />
          <div className="blogs-grid">
            {category.posts.map((post, index) => (
              <BlogPostCard key={index} {...post} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Blogs;
