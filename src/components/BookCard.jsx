import { useState } from "react";

export default function BookCard({ title, author, description, img }) {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="book-card" style={styles.card}>
      <img src={img} alt={`Cover of ${title}`} className="book-img" />
      <h3>{title}</h3>
      <p><strong>Author:</strong> {author}</p>
      {showDescription && <p>{description}</p>}
      <button
        className="read-more-btn"
        onClick={() => setShowDescription(!showDescription)}
      >
        {showDescription ? "Hide" : "Read More"}
      </button>
    </div>
  );
}

const styles = {
  card: {
    background: "rgba(255,255,255,0.8)",
    padding: "1rem",
    borderRadius: "10px",
    margin: "0.5rem 0",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
  }
};
