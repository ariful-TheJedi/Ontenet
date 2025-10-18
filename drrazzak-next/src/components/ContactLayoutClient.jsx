"use client";
import { useState } from "react";
import StickyContactButton from "./sub-components/sticky-contact-btn";
import ContactPopup from "./sub-components/ContactPopup";

export default function ContactLayoutClient({ children }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      {children}
      <StickyContactButton Open={setIsPopupOpen} />
      <ContactPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </>
  );
}
