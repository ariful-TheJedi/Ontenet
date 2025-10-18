// scripts/build-post-template.js
import fs from "fs";
import path from "path";
import React from "react";
import * as ReactDOMServer from "react-dom/server"; // ✅ fixed import

import Header from "C:\Users\Ontenet-1012\AppData\Local\Programs\Microsoft VS Code\resources\app\node_modules\tar\lib\header.js";
import Footer from "../app/components/Footer.jsx";



// ✅ Create your post template body
const PostBody = `
  <main class="single-post">
    <div class="post-content">
      <div class="hero-image">
        <img src="{{FEATURED_IMAGE}}" alt="{{TITLE}}" />
      </div>
      <div class="post-inner">
        <div class="post-meta">
          <span class="category">{{CATEGORY}}</span>
          <span class="date">
            <i class="far fa-calendar-alt"></i> {{DATE}}
          </span>
        </div>
        <h1 class="post-title">{{TITLE}}</h1>
        <div class="post-body">{{CONTENT}}</div>

        <div class="author-card">
          <img
            src="https://sub.drabdurrazzak.com/wp-content/uploads/2025/10/dr-muhammad-abdur-razzak-logo.png"
            alt="Author dr-muhammad-abdur-razzak transplant nephrologist"
            class="author-image"
          />
          <div class="author-info">
            <a href="/about-me" class="author-name">
              Dr. Muhammad Abdur Razzak
            </a>
            <p class="author-title">Transplant Nephrologist</p>
            <p class="author-posts">
              <a href="/publications">12+ Publications</a>
            </p>
          </div>
        </div>

        <div class="social-sharing">
          <a href="https://www.facebook.com/nephrology.bd/" class="facebook">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a style="background:white" href="https://www.youtube.com/@dr.muhammadabdurrazzak9632" class="youtube">
            <i style="color:red" class="fab fa-youtube"></i>
          </a>
          <a href="https://www.linkedin.com/in/muhammad-abdur-razzak-mbbs-md-fasn-60a594128/" class="linkedin">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a style="background:black" href="https://x.com/abdurrazzak103" class="pinterest">
            <i class="fab fa-x-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  </main>
`;

// ✅ Render header and footer components to HTML
const headerHTML = ReactDOMServer.renderToStaticMarkup(React.createElement(Header));
const footerHTML = ReactDOMServer.renderToStaticMarkup(React.createElement(Footer));

// ✅ Combine everything into one HTML template
const fullHTML = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{{TITLE}} | Dr. Muhammad Abdur Razzak</title>
    <link rel="stylesheet" href="/_next/static/css/main.css" />
  </head>
  <body>
    ${headerHTML}
    ${PostBody}
    ${footerHTML}
  </body>
</html>
`;

// ✅ Output directory and file
const outputDir = path.resolve("templates");
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

const filePath = path.join(outputDir, "post-template.html");
fs.writeFileSync(filePath, fullHTML);

console.log("✅ Post template generated successfully!");
console.log(`📄 Saved at: ${filePath}`);
