import { useEffect } from "react";


// this is for making dynamic title for seo
const PageWrapper = ({ title, description, children }) => {
  useEffect(() => {
    // Set document title
    document.title = title
      ? `${title} | Dr. Muhammad Abdur Razzak`
      : "Dr. Muhammad Abdur Razzak";

    // Optional description
    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute(
        "content",
        description ||
          "Official website of Dr. Muhammad Abdur Razzak — Transplant Nephrologist specializing in kidney transplantation, dialysis, and renal care in Bangladesh."
      );
    } else {
      const metaTag = document.createElement("meta");
      metaTag.name = "description";
      metaTag.content =
        description ||
        "Official website of Dr. Muhammad Abdur Razzak — Transplant Nephrologist specializing in kidney transplantation, dialysis, and renal care in Bangladesh.";
      document.head.appendChild(metaTag);
    }
  }, [title, description]);

  return <>{children}</>;
};

export default PageWrapper;
