"use client";
import React from "react";
import Image from "next/image";

const StickyContactButton = ({ Open, label = "Contact" }) => {
  return (
    <button onClick={() => Open(true)} className="sticky-contact-button">
      <p>
        <Image
          src="/contact-sticky.svg"
          alt="dr abdur razzak"
          width={40}
          height={40}
          loading="lazy"
          style={{ width: "auto", height: "auto" }}
        />
      </p>
    </button>
  );
};

export default StickyContactButton;
