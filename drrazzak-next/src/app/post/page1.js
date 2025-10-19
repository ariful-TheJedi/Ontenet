"use client";
import { Suspense, useEffect, useState } from "react";
import BlogPost from "./blog-post";
import Loading from "@/components/sub-components/Loading";

export default function Page() {
  const [slug, setSlug] = useState(null);

  useEffect(() => {
    const path = window.location.pathname;
    const slugFromPath = path.split("/post/")[1];
    if (slugFromPath) setSlug(decodeURIComponent(slugFromPath));
  }, []);

  if (!slug) return <Loading />;

  return (
    <Suspense fallback={<Loading />}>
      <BlogPost postSlug={slug} />
    </Suspense>
  );
}
