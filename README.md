
Wp Credentials(user name)
===========================
admin(arifulthejedi@gmail.com)
DrRazzak(sufisabih@gmail.com)


Overview
This is a modern, fast, and SEO-friendly doctor portfolio website built with Next.js on the frontend and WordPress (Headless CMS) on the backend. The system is designed to manage blogs, photo galleries, and dynamic content efficiently.

🖥️ Frontend

Framework: Next.js

Purpose: Renders dynamic pages and fetches data via WordPress REST API routes.

Features:

Fast client-side routing

SEO-optimized structure

Responsive and modern UI

⚙️ Backend (Headless WordPress)

CMS: WordPress

Role: Provides API endpoints for blog and gallery data.

API Routes:

/blog — Fetches all blog posts

/post/[post-title] — Fetches a single blog post by title

/gallery — Fetches all photo gallery categories

/images/category — Fetches all images under a selected category

🧩 Integration Flow

Next.js fetches data from WordPress via the defined API routes.

The frontend dynamically renders blogs and galleries using fetched JSON data.

WordPress handles content management without interfering with frontend performance.




