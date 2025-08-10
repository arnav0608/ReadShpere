import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}><i className="fas fa-book-open"></i> ReadSphere</h2>
      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/add-book" style={styles.link}>Add Book</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem 2rem",
    background: "rgba(255,255,255,0.2)",
    backdropFilter: "blur(5px)",
    borderRadius: "12px",
    marginBottom: "1rem"
  },
  logo: { color: "#333" },
  link: { marginLeft: "1rem", textDecoration: "none", color: "#444" }
};
