import React from "react";
import sticky from "../../assets/contact-sticky.svg";



const StickyContactButton = ({Open,label = "Contact" }) => {
  return (
    <button onClick={()=> Open(true)}  className="sticky-contact-button">
      <p>
        <img src={sticky} alt="dr abdur razzak"/>
      </p>
    </button>
  );
};

export default StickyContactButton;
