"use client";

import React from "react";
import slugify from "@/components/Hooks/slugify";
import Link from "next/link";
import Image from "next/image";

export default function BlogPostCardLates({
  slug,
  featured_image,
  date,
  title,
  excerpt,
}) {
  return (
    <div className="blog-post-card">
      {featured_image && (
        <div className="blog-post-card-image-wrapper">
          <Image
            src={featured_image}
            width={600}
            height={400}
            alt={title}
            className="blog-post-card-image"
            style={{ objectFit: "cover", width: "100%", height: "180px" }}
            priority={false}
          />
        </div>
      )}

      <div className="blog-post-card-content">
        <div className="blog-post-card-meta">Published: {date}</div>

        {/* {tags && tags.length > 0 && (
          <div className="blog-post-card-tags">
            {tags.map((tag, index) => (
              <span key={index} className="blog-post-card-tag">
                {tag}
              </span>
            ))}
          </div>
        )} */}

        <h3 className="blog-post-card-title">{title}</h3>

        <p dangerouslySetInnerHTML={{ __html: excerpt }} />

        <div className="blog-post-card-button">
          <Link href={slug} className="read-more-link">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
