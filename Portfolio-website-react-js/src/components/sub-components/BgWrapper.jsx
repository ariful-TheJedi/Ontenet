import { useEffect, useState } from "react";

const BgWrapper = ({ staticBg, gif, children }) => {
  const [gifLoaded, setGifLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = gif;
    img.onload = () => setGifLoaded(true);
  }, [gif]);

  console.log(gif,staticBg)

  const bgUrl = gifLoaded ? gif : staticBg;

  const backgroundStyle = {
    width: "100%",
    background: `url(${bgUrl}),linear-gradient(135deg, rgba(17,93,169,0.95), rgba(43,146,164,0.95))`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    transition: "background-image 0.8s ease-in-out, opacity 0.5s ease",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className="bg-wrapper" style={backgroundStyle}>
      {children}
    </div>
  );
};

export default BgWrapper;
