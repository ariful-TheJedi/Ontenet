import Link from "next/link";


const NotFoundPage = () => {

  const containerStyle = {
    minHeight: "90vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#1a1a1a",
    padding: "20px",
  };

  const headingStyle = {
    fontSize: "80px",
    fontWeight: "bold",
    color: "#115DA9",
    marginBottom: "10px",
  };

  const subTextStyle = {
    fontSize: "1.2rem",
    color: "rgb(68 68 68,71%)",
    marginBottom: "30px",
    maxWidth: "500px",
    lineHeight: "1.6",
  };

  const buttonStyle = {
    backgroundColor: "#115DA9",
    color: "white",
    border: "none",
    borderRadius: "6px",
    padding: "12px 28px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background 0.3s ease",
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = "#115DA9";
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = "#115DA9";
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>404</h1>
      <p style={subTextStyle}>
        The page you’re looking for doesn’t exist or might have been moved.
      </p>
      <Link
        style={buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        href={"/"}
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
